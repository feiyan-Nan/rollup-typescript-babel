/**
 * 获取cookie
 * @param cname
 */
export function getCookie(cname: string) {
  if (document.cookie.length > 0) {
    var cstart = document.cookie.indexOf(cname + '=');
    if (cstart != -1) {
      cstart = cstart + cname.length + 1;
      var cend = document.cookie.indexOf(';', cstart);
      if (cend == -1) {
        cend = document.cookie.length;
      }
      return unescape(document.cookie.substring(cstart, cend));
    }
  }
  return '';
}

export function getQueryString(name: string) {
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  const _search = window.parent ? window.parent.location.search : window.location.search
  var r = _search.substr(1).match(reg);
  if(r!=null)return unescape(r[2]); return null;
}
