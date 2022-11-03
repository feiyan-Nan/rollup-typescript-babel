#!/bin/sh

PS3='请选择你要发布的版本: '
foods=("patch" "minor" "major" "quit")
select fav in "${foods[@]}"; do
    case $fav in
        "patch")
            echo "Americans eat roughly 100 acres of $fav each day!"
	    # optionally call a function or run some code here
            ;;
        "minor")
            echo "$fav is a Vietnamese soup that is commonly mispronounced like go, instead of duh."
	    # optionally call a function or run some code here
            ;;
        "major")
            echo "According to NationalTacoDay.com, Americans are eating 4.5 billion $fav each year."
	    # optionally call a function or run some code here
	    break
            ;;
	"quit")
	    echo "User requested exit"
	    exit
	    ;;
        *) echo "invalid option $REPLY";;
    esac
done

npm list
