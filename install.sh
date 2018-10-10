#!/bin/bash

mkdir -p ~/bin
cp swirl ~/bin && chmod +x ~/bin/swirl
touch ~/.bash_completion && cat swirl_completion >> ~/.bash_completion && source ~/.bashrc