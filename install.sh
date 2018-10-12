#!/bin/bash

mkdir -p ~/bin
cp swirl ~/bin && chmod +x ~/bin/swirl
menu_list=$(cat menu_list)
touch ~/.bash_completion
if grep -q "'$menu_list'" ~/.bash_completion
then # If found
  echo "Up To Date"
else
  old_list="compgen -W '[_ a-zA-Z3]*' -- \$swirl_arg"
  if grep -q "$old_list" ~/.bash_completion
  then # If found
    update="compgen -W '$menu_list' -- \$swirl_arg"
    sed -i -e "s/$old_list/$update/g" ~/.bash_completion 
    echo "Updated"
  else
    cat swirl_completion >> ~/.bash_completion && sed -i -e "s/__SWIRL_MENU_LIST__/$menu_list/g" ~/.bash_completion
    echo "Installed"
  fi
  source ~/.bashrc
fi

exit 0