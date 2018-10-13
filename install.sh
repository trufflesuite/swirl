#!/bin/bash

mkdir -p ~/bin
touch ~/bin/swirl
success='### SUCCESS: Swirl is up-to-date! ###'
install='### INSTALLED: The latest version of swirl is now installed! ###'
cmp --silent ~/bin/swirl swirl && echo $success || (cp swirl ~/bin && chmod +x ~/bin/swirl && echo $install)
menu_list=$(cat menu_list)
touch ~/.bash_completion
if grep -q "'$menu_list'" ~/.bash_completion
then # If found
  echo "### Bash completions up to date. ###"
else
  old_list="compgen -W '[_ a-zA-Z3]*' -- \$swirl_arg"
  if grep -q "$old_list" ~/.bash_completion
  then # If found
    update="compgen -W '$menu_list' -- \$swirl_arg"
    sed -i -e "s/$old_list/$update/g" ~/.bash_completion 
    echo "### Completions updated. ###"
  else
    cat swirl_completion >> ~/.bash_completion && sed -i -e "s/__SWIRL_MENU_LIST__/$menu_list/g" ~/.bash_completion
    echo "### Completions Installed. ###"
  fi
  source ~/.bashrc
fi

exit 0