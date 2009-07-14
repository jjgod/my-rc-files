#
# Your previous .profile  (if any) is saved as .profile.mpsaved
# Setting the path for MacPorts.
export PATH=/usr/local/bin:/opt/texlive2009/bin/universal-darwin:/opt/local/bin:/opt/local/sbin:$PATH
export MANPATH=/opt/texlive2009/texmf/doc/man:/opt/local/man:/usr/local/man:$MANPATH
export INFOPATH=/opt/texlive2009/texmf/doc/info:$INFOPATH
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
export PLEX_HOME=/Applications/Plex.app/Contents/Resources/Plex
export DEVKITPRO=/opt/devkitpro
export DEVKITPPC=$DEVKITPRO/devkitPPC

export CLICOLOR=1
export LANG=en_US.utf-8
export LC_CTYPE="en_US.utf-8"
export PS1="\h:\W \u\$ "

export EDITOR=/Applications/Vim.app/Contents/MacOS/Vim

alias mplayer="/Applications/MPlayer\ OSX.app/Contents/Resources/External_Binaries/mplayer.app/Contents/MacOS/mplayer"
# alias mplayer="/Users/jjgod/Codes/c/mplayer-git/mplayer -lavdopts threads=4"
# alias gvim='/Applications/Vim.app/Contents/MacOS/Vim -g'
alias tgvim='/Users/jjgod/Codes/c/vim/src/Vim.app/Contents/MacOS/Vim -g'
alias wget='/usr/local/bin/wget --content-disposition=yes'

export VIMRUNTIME=/Users/jjgod/Codes/c/vim/runtime

alias egrep='egrep --color=tty -d skip'
alias egrpe='egrep --color=tty -d skip'
alias fgrep='fgrep --color=tty -d skip'
alias fgrpe='fgrep --color=tty -d skip'
alias grep='grep --color=tty -d skip'
alias grpe='grep --color=tty -d skip'
alias h=history
alias t=task
alias mmd='~/Library/Application\ Support/MultiMarkdown/bin/multimarkdown2XHTML.pl'

source /Users/jjgod/Codes/script/shell/autojump/autojump.sh

. /opt/local/share/doc/git-core/contrib/completion/git-completion.bash
. cdargs-bash.sh

export HISTCONTROL=erasedups
export HISTSIZE=10000
shopt -s histappend

