; disable backup
(setq backup-inhibited t)
; disable auto save
(setq auto-save-default nil)

; turn off startup message
(setq inhibit-startup-message t)
; use GUI-style selection
(pc-selection-mode)
; make Option as meta key
(setq mac-command-key-is-meta nil)

; use cmd + {x,c,v} for cut/copy/paste
(setq *true-mac-cut-buffer* "")
(setq *true-mac-cut-buffer2* t)

(setq interprogram-cut-function
      '(lambda (str push)
         (setq *true-mac-cut-buffer* str)
         (setq *true-mac-cut-buffer2* push)))

(setq interprogram-paste-function
      '(lambda () nil))

(defun true-mac-cut-function () (interactive)
  (if mark-active
      (progn 
        (true-mac-copy-function)
        (kill-region (point) (mark)))
    (beep)))
        
(defun true-mac-copy-function () (interactive)
  (if mark-active
      (mac-cut-function 
       *true-mac-cut-buffer*
       *true-mac-cut-buffer2*)
    (beep)))

(defun true-mac-paste-function () (interactive)
  (if mark-active
      (kill-region (point) (mark)))
  (insert (mac-paste-function)))

(global-set-key [?\A-x] 'true-mac-cut-function)
(global-set-key [?\A-c] 'true-mac-copy-function)
(global-set-key [?\A-v] 'true-mac-paste-function)

; mac-style command
(global-set-key [?\A-a] 'mark-whole-buffer)
(global-set-key [?\A-s] 'save-buffer)
(global-set-key [?\A-S] 'write-file)
(global-set-key [?\A-p] 'ps-print-buffer)
(global-set-key [?\A-o] 'find-file)
(global-set-key [?\A-q] 'save-buffers-kill-emacs)
(global-set-key [?\A-w] 'kill-buffer-and-window)
(global-set-key [?\A-z] 'undo)
(global-set-key [?\A-f] 'isearch-forward)
(global-set-key [?\A-g] 'query-replace)
(global-set-key [?\A-l] 'goto-line)
(global-set-key [?\A-m] 'iconify-frame)
(global-set-key [?\A-n] 'new-frame)

(set-frame-font "Monaco-14")
(set-fontset-font (frame-parameter nil 'font)
                    'han '("STHeiti" . "unicode-bmp"))

(setq ns-antialias-text t)
(setq mac-command-modifier 'meta)
(setq mac-option-modifier 'alt)

