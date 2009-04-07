"language zh_cn
"set langmenu=zh_cn.utf8
set nocompatible
syntax on
" set encoding=utf-8
set fencs=ucs-bom,utf-8,gb18030,cp936
set shiftwidth=4 tabstop=4 expandtab smarttab autoindent smartindent
set nobackup nowritebackup
set nu!
set backspace=indent,eol,start
"set macatsui antialias
"set guifont=Monaco\ 16
filetype plugin indent on
set hlsearch
set showcmd
set ruler
set lbr
set wildmenu

set cpt=.,w,b,u,t

nmap <C-s> :w<CR>
map <A-k> :tabnext<CR>

map <F2> :tabnext<CR>
map <F3> :tabprev<CR>
map <F5> :make<CR>
nnoremap <silent> <F8> :TlistToggle<CR>

" TagList settings
let Tlist_Show_One_File = 1
let Tlist_Use_Right_Window = 1
let Tlist_Use_SingleClick = 1
let Tlist_Enable_Fold_Column = 1

set tags+=~/.vim/systags

augroup mkd
  autocmd BufRead *.mkd       set ai formatoptions=tcroqn2 comments=n:>
  autocmd BufRead *.markdown  set ai formatoptions=tcroqn2 comments=n:>
augroup END

au BufRead sup.*        set ft=mail
au BufNewFile,BufRead *.i set filetype=swig

map ,/ :s/^/\/\//<CR>

