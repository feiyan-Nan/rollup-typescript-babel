#!/bin/sh
function info(){
    DATE_N=`date "+%Y-%m-%d %H:%M:%S"`
    echo "$DATE_N $@"
}

function success(){
    DATE_N=`date "+%Y-%m-%d %H:%M:%S"`
    echo "$DATE_N \033[32m$@\033[0m"
}

function error(){
    DATE_N=`date "+%Y-%m-%d %H:%M:%S"`
    echo "$DATE_N \033[31m$@\033[0m"
}

function echoVersion (){
  echo "\n\n\033[32m$@\033[0m \n\n"
}

function check_success (){
  if [ "$1" != 0 ]
  then
    error "\n\n\n $2\n\n";
    exit 1;
  fi
}

git add .

git commit -m "feat: 升级版本"

git push

check_success $? 'git push 失败，请检查，并手动提交'

registry=https://npm-registry.duowan.com

NODE_VERSION=$(node -p -e "require('./package.json').version");

PACKAGE_NAME=$(node -p -e "require('./package.json').name");

version=`npm view $PACKAGE_NAME dist-tags --registry=$registry`;

latest=$(node -p -e "eval($version).latest");

success "\n\n最近一个版本：$latest \n\n当前版本    ：$NODE_VERSION";

echo '\n\n';

read -n 1 -t 300 -p "请选择你要发布的版本 ( 1patch补丁 | 2minor次要版本 | 3major主要版本):" selectVersion;
echo '\n\n';
if [ "$selectVersion" == 1 ];
then
  npm version patch
elif [  "$selectVersion" == 2 ];
then
  npm version minor
elif [  "$selectVersion" == 3 ];
then
  npm version major
fi;

#read -n 1 -t 300 -p "确定是否发布当前版本 ( y确定 | n取消 | s查看所有版本):" sure;
#
#echo '\n\n';
#
#if [ "$sure" == 'n' ];
#then
#  success '\n\n\n取消发布\n\n\n';
#
#  exit 1;
#elif [  "$sure" == 's' ];
#then
#
#  npm view $PACKAGE_NAME versions --registry=$registry;
#
#  exit 1;
#fi;

yarn build  || { error "\n\n\n打包命令出错，请检查\n\n"; exit 1; }

npm publish --registry=$registry

check_success $? 'publish 请检查版本号是否正确及 | 或者是否有发布权限'

success '\n\n\n打包成功\n\n\n';


success '发布成功\n\n\n';

RUN_SCRIPT="yarn add $PACKAGE_NAME@$NODE_VERSION"

echoVersion $RUN_SCRIPT

echo $RUN_SCRIPT | pbcopy

echo '命令已复制到剪贴板\n\n\n\n'
