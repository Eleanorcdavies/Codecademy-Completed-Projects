$ python -c 'import script; script.sparse_search([""], "Hello")'
Data: ['']
Search Value: Hello
Hello is not in the dataset
$ python -c 'import script; script.sparse_search(["A", "", "", "", "B", "", "", "", "C"], "B")'
Data: ['A', '', '', '', 'B', '', '', '', 'C']
Search Value: B
B found at position 4
$ python -c 'import script; script.sparse_search(["A", "", "", "", ""], "A")'
Data: ['A', '', '', '', '']
Search Value: A
A found at position 0
$ python -c 'import script; script.sparse_search(["", "", "", "", "Z"], "Z")'
Data: ['', '', '', '', 'Z']
Search Value: Z
Z found at position 4
$ python -c 'import script; script.sparse_search(["A", "", "", "", "B", "", "", "", "C", "", "", "D"], "C")'
Data: ['A', '', '', '', 'B', '', '', '', 'C', '', '', 'D']
Search Value: C
C found at position 8
$ python -c 'import script; script.sparse_search(["A", "B", "", "", "E"], "A")'
Data: ['A', 'B', '', '', 'E']
Search Value: A
A found at position 0
$ python -c 'import script; script.sparse_search(["", "X", "", "Y", "Z"], "Z")'
Data: ['', 'X', '', 'Y', 'Z']
Search Value: Z
Z found at position 4
$ python -c 'import script; script.sparse_search(["A", "", "", "", "B", "", "", "", "C"], "D")'
Data: ['A', '', '', '', 'B', '', '', '', 'C']
Search Value: D
D is not in the dataset
$ python -c 'import script; script.sparse_search(["Apple", "", "Banana", "", "", "", "", "Cow"], "Banana")'Data: ['Apple', '', 'Banana', '', '', '', '', 'Cow']Search Value: BananaBanana found at position 2
$ python -c 'import script; script.sparse_search(["Alex", "", "", "", "", "Devan", "", "", "Elise", "", "", "", "Gary", "", "", "Mimi", "", "", "Parth", "", "", "", "Zachary"], "Parth")'
Data: ['Alex', '', '', '', '', 'Devan', '', '', 'Elise', '', '', '', 'Gary', '', '', 'Mimi', '', '', 'Parth', '', '', '', 'Zachary']
Search Value: Parth
Parth found at position 18
