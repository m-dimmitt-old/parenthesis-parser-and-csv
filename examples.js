
const commentingExample = `
;;;; Math Utilities

;;; FIB computes the the Fibonacci function in the traditional
;;; recursive way.

(defun fib (n)
  (check-type n integer)
  ;; At this point we're sure we have an integer argument.
  ;; Now we can get down to some serious computation.
  (cond ((< n 0)
         ;; Hey, this is just supposed to be a simple example.
         ;; Did you really expect me to handle the general case?
         (error "FIB got ~D as an argument." n))
        ((< n 2) n)             ;fib[0]=0 and fib[1]=1
        ;; The cheap cases didn't work.
        ;; Nothing more to do but recurse.
        (t (+ (fib (- n 1))     ;The traditional formula
              (fib (- n 2)))))) ; is fib[n-1]+fib[n-2].
`

const example2 =`
  (defun afisare (i j g h)
  (print (aref x i j))
  (print (aref x g h))
  )
`

const example1 =`
  (setf x (make-array '(3 3):initial-contents'((1 2 3)(4 5 6)(7 8 9))))
  (write x)
`

const longExample = `
(setf x (make-array '(3 3):initial-contents'((1 2 3)(4 5 6)(7 8 9))))
  (write x)

  (defun afisare (i j g h)
  (print (aref x i j))
  (print (aref x g h))
  )

  (afisare 0 1 0 2)


  (setq myarray (make-array '(3 2 3)
     :initial-contents
     '(((a b c) (1 2 3))
        ((d e f) (4 5 6))
        ((g h i) (7 8 9))
     ))
  )
  (setq array2 (make-array '(3 2) :displaced-to myarray :displaced-index-offset 5))
  (write myarray)
  (terpri)
  (write array2)


  (setf (get 'student 'Nume) 'Dan)
  (setf (get 'student 'Varsta) 21)
  (setf (get 'student 'An) 3)
  (setf (get 'student 'cnp) 1970506350036)

  (terpri)
  (write (symbol-plist 'student))


  (defun averagenum (n1 n2 n3)
     (/ ( + n1 n2 n3) 3)
  )
  (write(averagenum 5 10 6))
`

module.exports = { longExample, example1, example2, commentingExample }
