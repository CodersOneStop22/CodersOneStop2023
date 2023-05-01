----------------Python Cheat Sheet -------------
1) int(3.14)  ---> Int datatype which will convert the float number into Int 
2) float(2)   --> Converting Int into Float
3) a=2+3j
complex(2)   
4) Str(100) Would convert the Int into string

y=100
x=str(y)
type(x)

5) pow(x,y)
6) divmod(x,y)
7) abs(x)
8) import math
math.factorial(x)

8a) Print Mutiple lines in one Command for Comment 

print("""Welcome
        To
      Python 
      Advanve 
      Session""")


8b) #Swapping the Numbers #


# Swap the numbers #

var1,var2 = (100,200)
var1=var2                          
var2=var1
print(var1,var2)


# Swap the numbers #

var1,var2=(100,200)
temp=var1 #--> 100
var1=var2  #-->  200
var2=temp #--> 100
print(var1,var2)

 
9) Plus Operator : "+"

----When You need to Concat Two String 

a=100
b='$'

print(b+str(a))

o/p : $100

----When two Int values needs to be added 

x=10
x=x+2
print(x)

o/p : 12


-------Example -------

a='Hello'
b='Welcome to the Python Master Class'

print(a + '    ' +b)


9a)
x=6
y=6
add=x+y
print(add)


9b)
a='Hello everyone '
b='welcome to Python Session'
c=a+b  # Concat function
print(c)


9d)
# Calculation and cal =100
Total_Bal=str(100)
Display_Text='Today Balance is '

#Display_Bal='Today Balance is $Total_Bal'

Display_Bal=Display_Text +'$'+Total_Bal

print(Display_Bal)

9e)
# Calculation and cal =100
Total_Bal=str(input())
Display_Text='Today Balance is '

#Display_Bal='Today Balance is $Total_Bal'

Display_Bal=Display_Text +'$'+Total_Bal

print(Display_Bal)


9f)

# Calculation and cal =100
Initial_bal=int(input())
Expediture=int(input())


#Expression for Total Bal
Total_bal=Initial_bal - Expediture

print('Total Bal is :',Total_bal)



9g)  ----------Divison , Quotient and Remainder ---------


Division = a/b
Quotient = a//b
Remainder = a%b


x=int(input())
y=int(input())

Divsion=x/y
print('Divison of two Number :',Divsion)

Quotient=x//y
print('Quotient of two Number :',Quotient)

Remainder=x%y
print('Remainder of two Number :',Remainder)

Ans :
10
3
Divison of two Number : 3.3333333333333335
Quotient of two Number : 3
Remainder of two Number : 1


9h) Print the number which is divisble by 2 and 3


#write a program which will find out the numbere which is divible by 2 and 3 both

n=int(input())

if n%2==0 and n%3==0 :
    print('Number is divible by 2 and 3 both ',n)
else:
    print('Number is NOT divible by 2 and 3 both ',n)
 
 





=======================05/14============

Factorial : 3
           : 3*2*1 
           
           :5 
           : 5*4*3*2*1
           
           


10) Checking the data types of An Varibale /Expresion :

type(10)
int

type(a)
str

type(12.5)
float


11)  Assigning the multiple values into varible 


a=5
a=10
print(a)

--10


12) Interchanging the variable values  , But both variable got the values of Variable y


x,y = (100,200)
print('x old value is :' ,x)
print('y old value is :' ,y)
print('Assigning the y value to x')
x=y   
print('Assigning the x value to y')
y=x    
print('x New value is :' ,x)
print('y New value is :' ,y)


13) Interchanging the variable values betweeb x and y :


x,y = (100,200)
print('x old value is :' ,x)  --> 100
print('y old value is :' ,y)  --> 200
print('Assigning the y value to x')
temp=x  --> temp --> 100
x=y     ---> x --> 200

print('Assigning the x value to y')
y=temp   ---> y --> 100
print('x New value is :' ,x)
print('y New value is :' ,y)


14) Divison , Quotient and Remainder 

a=13
b=4

y=a/b
print('Diviosn of a and b:' ,y) # Float output

x=a//b
print('Quotient of a and b:' ,x) 

z=a%b
print('Mod/Remainder of a and b:' ,z)

15) 

	Operation	Description
	x==y		 x is equal to y
	x != y	 	 x is not equal to y
	x > y 		 x is greater than y
	x < y 		 x is less than y
	x >= y 		 x is greater than or equal to y
	x <= y 		 x is less than or equal to y


15a)
x=3
y=4

x<y

Ans: True

15b) 

x=3
y=4

x==y

Ans : False


15c) 
Note :


Assignment Operator  = 
a = 1;

Do not confuse with equality Operator  ==




16) Additional Operator check

x > 0 and x < 10 

n%2 == 0 or n%3 == 0 


17)

a=13
b=4

y=a/b
print('Diviosn of a and b:' ,y) # Float output

x=a//b
print('Quotient of a and b:' ,x) 

z=a%b
print('Mod/Remainder of a and b:' ,z)


18 ) Chapter 9,10 --> page 19 for Addiotinal Logic


19) Chapter 9,10  ---> Operator Precedence --> Page 23 --> BODMAS





================06/04=============I/O Ops==============Input /Split/

20 )
res = input('What is your favorite programming language: ')

21) 
year = int(input(“What is your age?” ))  ---> Error Coming while passing float value as input

-------Conclusion ------

year = int(float(input('What is your age?' )))
print(year)


Name = str(input('What is your age?' ))
print(Name)





22) ----Split Method ---


reply = input(" Enter x and y, separated by spaces:" )
var1 = reply.split( ) 	           # returns a list of strings, as separated by spaces
var2= reply.split(',' )            # returns a list of strings, as separated by comma
var3 = reply.split('#')            # returns a list of strings, as separated by #
x = int(var1[0])
y = int(var1[1])
z = int(var1[2])
print(x,y,z)




reply = input(" Enter x and y, separated by spaces:" )
var1 = reply.split( ) 	           # returns a list of strings, as separated by spaces
var2= reply.split(',' )            # returns a list of strings, as separated by comma
var3 = reply.split('#')            # returns a list of strings, as separated by #
x = int(var2[0])
y = int(var2[1])
z = int(var2[2])
print(x,y,z)


reply = input(" Enter x and y, separated by spaces:" )
var1 = reply.split( ) 	           # returns a list of strings, as separated by spaces
x = int(var1[0])
y = int(var1[1])
z = int(var1[2])
print(x,y,z)



reply = input(" Enter x and y, separated by Comma:" )
print(reply)
var1 = reply.split(',')   # returns a list of strings, as separated by comma
x = int(var1[0])
y = int(var1[1])
z = int(var1[2])
print(x,y,z)


reply = input(" Enter x and y, separated by #:" )
var1 = reply.split('#')   # returns a list of strings, as separated by #
x = int(var1[0])
y = int(var1[1])
z = int(var1[2])
print(x,y,z)



23) 
print("Is Python a dynamic language?",end="\nPython")

print("Is Python a dynamic language?\n",end="Python")

print("Is Python a dynamic language?\t",end="Python")



24) 
def check_user_input(input):
    try:
        # Convert it into integer
        val = int(input)
        print("Input is an integer number. Number = ", val)
    except ValueError:
        try:
            # Convert it into float
            val = float(input)
            print("Input is a float  number. Number = ", val)
        except ValueError:
            print("No.. input is not a number. It's a string")


input1 = input("Enter your Age ")
check_user_input(input1)

input2 = input("Enter any number ")
check_user_input(input2)

input2 = input("Enter the last number ")
check_user_input(input2)



25 ) 

count = int(input("Enter the count: "))
theSum = int(input("Enter the sum: "))
if count > 0 and theSum // count > 10:
	print("average > 10")
else:
	print("count = 0 or average <= 10")




--------------------.format-----------------
26) 


print("Hello {}, your balance is {}.".format("Adam", 230.2346))

print("Hello {0}, your balance is {1}.".format("Adam", 230.2346))


print("Hello {0}, your balance is {1}.".format(230.2346,"Adam"))

print("Hello {0}, your balance is {balance}.".format("Adam", balance=230.2346))


Name=input()
Balance=input()
print("{} your Balance is {}".format(Name,Balance))

# Abhishek Kumar
# 200
# Abhishek Kumar your Balance is 200


print("Hello {}, your balance is {}".format("Adam", 230.2346))

print('Hello {0} , Your Current Balanace is {1}'.format('Bhanu',10000000))

print("Hello {Name} , You Live in Address with zip Code is {PIN}".format(Name="Prabhat",PIN=75028))

print("Hello {Name} , Welcome to {Course} Class".format(Name=input(), Course=input()))


###-----------------------------------If then Else Condition-------------------------------

27) 

print('First Condition Statement')
x=3
y=4

if x>y:
    print('X is greater than Y')


print('Last Statement of Script without checking If Condition')    
 
 
 
27a) Comparing the ASCI Values when varibables are String :


print('First Condition Statement')
x=input()
y=input()

if x>y:
    print('X is Greater than Y')

print('Last Statement of Script without checking If Condition')  

------------
First Condition Statement
a
A
X is Greater than Y
Last Statement of Script without checking If Condition
 
 
 28)
 
  print('First Condition Statement')
x=3
y=4

if x>y:
    print('X is greater than Y')
elif x<y:
        print('X is lesser than Y')
        


print('Last Statement of Script without checking If Condition')  
 
 
 
28a) 
print('First Condition Statement')
x=input()
y=input()

if x>y:
    print('x is greater than y',x)
else:
    print('y is greater than x',y)

    
print('Last Statement of Script without checking If Condition')  


28b)

print('First Condition Statement')
x=input()
y=input()

if x>y:
    print('X is greater than Y')
elif x<y:
        print('X is lesser than Y')

        
print('Last Statement of Script without checking If Condition') 
 
 29) 
 
 print('First Condition Statement')
x=5
y=4
z=2

if x>y:
    print('X is greater than Y')
    if z<y:
        print('Print 2nd If condition ')


print('Last Statement of Script without checking If Condition') 

30) 

x=7
y=5
if x>y:
    print('x is greater than y',x)
else:
    print('y is greater than x',y)
    
    
30a)


print('Nested IF Condition Statement')

Name=input()
State=input()
SSN=input()

if Name=='Abhi':
    print('Customer Name is',Name)
    if State=='NJ':
        print('He Lives in ',State)
        if SSN=='1234':
            print('His SSN also Matched :',SSN)
        

print('Last Statement of Script without checking If Condition') 


    
30b)

x=7
y=7
if x>y:
    print('x is greater than y')
elif y>x:
    print('y is greater then x')
else:
    print(' x and y are equal')
    
30) Pass --->  in if then else

x=7
y=7
if x>y:
    #print('x is greater than y')
    pass
elif y>x:
    #print('y is greater then x')
    pass
else:
    #print(' x and y are equal')
    pass


30) 
    
    print('First Condition Statement')
x=5
y=4
z=6

if x>y:
    print('X is greater than Y')
    if z<y:
        print('Print 2nd If condition ')


print('Last Statement of Script without checking If Condition')  
    
    
    
31) Printing multiple lines of comments 
Var_1="""
This is Python master class
This is with Data Science
Focus on class
"""

print(Var_1)


---------------Loops -------------------------------

##----While Loop---
while condition:
	body

##----Range -------
range(start, End , step)

x = range(3, 20, 2)

##----For Loop ----
for var in Expression/Logic:
statements	

for i in Expression/Logic:
statements

-------While loop -----------------

32) 

n=int(input("Enter your Age "))
type(n)
while n > 0:
    print('Number is ',n)
    n = n-1
    
print('Blastoff!')
    

o/p:
5
4
3
2
1
Blastoff

33) 

n=int(input("Enter your Age "))
type(n)
while n > 0:
    print('Number is ',n)
    n = n-1  
    print('Blastoff!')
    
o/p:

Enter your Age 5
Number is  5
Blastoff!
Number is  4
Blastoff!
Number is  3
Blastoff!
Number is  2
Blastoff!
Number is  1
Blastoff!

34) Infinite While Loop which prints nothing because we have not defined Count initial Value.

count int
while count < 5:    
    print(count)   
    count = count + 1

35) Infinite Loop : Below example would go into infinite loop reason is 5 is true all the time

while 5:    
    print(count)   
    count = count + 1
    
    
36) 

count=0
while count in range(5):    
    print(count)   
    count +=  1
    
o/p :

0
1
2
3
4


--------------Range -----------------------

33) 
Range_variable = list(range(6))
print(Range_variable)

[0, 1, 2, 3, 4, 5]


34) 
Range_variable = list(range(2, 24, 3))
print(Range_variable)


35) 

Range_variable = list(range(2, -10, -1))
print(Range_variable)

[2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]


36) Starting Point is Positive , End Point is also Positive and Interval is also Positive

Range_variable = list(range(2, 10, 1))
print(Range_variable)

o/p : [2, 3, 4, 5, 6, 7, 8, 9]

37) Starting Point is Positive , End Point is also Positive and Interval is also Negative

Range_variable = list(range(2, 10, -1))
print(Range_variable)

O/p : []  --> Empty List


38) Starting Point is Positive , End Point is also Negative  and Interval is also Positive
Range_variable = list(range(2, -10, 1))
print(Range_variable)

O/p : []  --> Empty List


39) Starting Point is Positive , End Point is also Negative  and Interval is also Negative

Range_variable = list(range(2, -10, -1))
print(Range_variable)

o/p : [2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]


40) Starting Point is  Negative, End Point is also Negative  and Interval is also Negative

Range_variable = list(range(-2, -10, -1))
print(Range_variable)


o/p : [-2, -3, -4, -5, -6, -7, -8, -9]


41) Starting Point is  Negative, End Point is also Negative  and Interval is also Positive

Range_variable = list(range(-2, -10, 1))
print(Range_variable)

42) Starting Point is  Negative lesser than end point, End Point is also Negative  and Interval is also Positive


Range_variable = list(range(-20, -10, 1))
print(Range_variable)

43) 


Range_variable = list(range(-11, -10, 1))
print(Range_variable)

[-11]

44) 

Range_variable = list(range(-11, -10, -1))
print(Range_variable)


###----------------For Loop--------------------

45) 
x=list(range(2, 10, 1))
print(x)
  
o/p :   [2, 3, 4, 5, 6, 7, 8, 9]
  

  
46) 

x=range(2, 10, 1)
for n in x:
  print(n)
  
o/p :
2
3
4
5
6
7
8
9
  
  
47) 

for n in range(2, 10, 1):
  print(n)
  
 o/p :
2
3
4
5
6
7
8
9


47a)

#for i in expression:
#   statements Body

#x=range(1, 6)
#print(x)

for i in range(1, 6):
    print(i)
    
47b) 

for i in range(1, 6):
    print(i,end=' ')

47c)

for i in range(1, 6):
    print(i,end=',')    

---------While Loop and For Loop------------

for x in range(5):    
	print(x)


--------------Nested For Loop---------

48)  
print('i,j with below')
for i in range(1,3):   
    for j in range(1,4):
        print(i,j)
    
i,j with below
1 1
1 2
1 3
2 1
2 2
2 3

49) 
print('i,j,k with below')
for i in range(1,3):   
    for j in range(1,4):
        print(i,j)
    for k in range(1,5):
        print(i,j,k)


49a) 

for i in range(1,3):
    for j in range(1,4):
        print(i,j)
        if(j==3):
            for k in range(1,5):
                print(i,j,k)

                

i,j,k with below
1 1
1 2
1 3
1 3 1
1 3 2
1 3 3
1 3 4
2 1
2 2
2 3
2 3 1
2 3 2
2 3 3
2 3 4



49c) Print Below

i j k
1 3 1
1 3 2
1 3 3
1 3 4
2 3 1
2 3 2
2 3 3
2 3 4


for i in range(1,3):
    for j in range(1,4):
        #print(i,j)
        if(j==3):
            for k in range(1,5):
                print(i,j,k)


50) 
print('i,j,k with below')
for i in range(1,3):   
    for j in range(1,4):
        for k in range(1,5):
            print(i,j)
            print(i,j,k)
            
i,j,k with below
1 1 1
1 1 2
1 1 3
1 1 4
1 2 1
1 2 2
1 2 3
1 2 4
1 3 1
1 3 2
1 3 3
1 3 4
2 1 1
2 1 2
2 1 3
2 1 4
2 2 1
2 2 2
2 2 3
2 2 4
2 3 1
2 3 2
2 3 3
2 3 4


51) 
print('i,j,k with below')
for i in range(1,3):   
    for j in range(1,4):
        print(i,j)
        for k in range(1,5):
            j=int(j)
            k=int(k)
            if j==k:
                print(i,j,k)
 
 i,j,k with below
1 1
1 1 1
1 2
1 2 2
1 3
1 3 3
2 1
2 1 1
2 2
2 2 2
2 3
2 3 3


---------------List-------------

52) First_List = [10, 30, 40, 60]
print(First_List[3])

--> 60


53) First_List = [10, 30, 40, 60]
print(First_List[-2])

--> 40

54) Multiple_data_Types=['spam', 2.0, 5, [10, 20]]
print(Multiple_data_Types[3])

---> [10, 20]

----One List can have different kind of data types elements----

55) Multiple_data_Types=['spam', 2.0, 5, [10, 20]]
print(Multiple_data_Types[3][0])

--> 10


55a) 

List_Diff1=['spam', 1, ['Brie', 'Roquefort', 'Pol le Veq'], [1, 2, 3]]
print(List_Diff1[2])
print(List_Diff1[2][0])

55b)

List_Diff1=['spam', 1, ['Brie', 'Roquefort', 'Pol le Veq'], [1, 2, 3]]
Var1= List_Diff1[2]
print(Var1)
Var2=Var1[0]
print(Var2)

56c)

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1])
print(matrix[1][1])


56d) What is the issue in below code and how this could be fixed :

x=input()
for number in x:
    print(number, end = " ")
    
    
56e) 

for number in [1, 2, 3, 4]:
		print(number, end = " ")
        
        
57) Empty List in For Loop :

for x in []:
	print('This never happens.')
    
    
58) 
##1) Take a list and sum-up their data and print the final sumed value

list=[1,2,3,45]
sum=0
for i in list:
   sum=sum+i
print(sum)


59) Sum-up the List Data with another way :

list = [10,20,30,40]
length=len(list)
#print(length)

sum=0
for  i  in range(0,len(list)):
	sum=sum + list[i]
print(sum)


59a)  Sum-up the List index :

list = [10,20,30,40]
length=len(list)
#print(length)

sum=0
for  i  in range(0,len(list)):
	sum=sum + i
print(sum)


59b) Concatenation of Lists using "+" Operator :


a = [1, 2, 3]
b = [4, 5, 6]
c=a + b
print(c)

 
 
59c) How to Repeat the List Data : 

a=['Apple','Orange']
b=a*4
print(b)


c=[1, 2, 3]
d=c*3
print(d)



60) Summation of List Elelemnts:

x=[2,5]

print(sum(x))
 
 


61)   ---------------Index Value and Slicing -----------------

 L = ['a', 'b', 'c', 'd', 'e', 'f']
L[1:3]

61a) Forward Index till End :

 L = ['a', 'b', 'c', 'd', 'e', 'f']
L[1:]


61b)  Backward Index till End :
L = ['a', 'b', 'c', 'd', 'e', 'f']
L[:3]
 
 
61c) All Index Value 
 
 L[:]
 
 
61d)  Empty Index in List thorw Error :

L[]


61e) Searching Elements in List :

L=['a', 'b', 'c', 'd', 'e', 'f']

a in L

'a' in L

'A' in L

'A' not in L
 
 
61d)Count the Occurence of element in List
L=[5,2,3,2,5,5]

L.count(5) 


61e) Search the Index postion in List :

L=['First Name','Last name','DOB','Account_No','sal','No of years']
L.index('Account_No')



61d) Appedning the data into List 

Syntax : append() 

L = ['a', 'b', 'c']
L.append('e')
print(L)

L.append(1)
print(L)


Syntax : extend() 

t1 = ['a', 'b', 'c']
t2 = ['d', 'e']
t1.extend(t2)
print(t1)


t1 = ['a', 'b', 'c']
t2 = ['d', 'e']
t3= t1+t2
print(t1+t2)


61e) Insert New Value :


L = ['a', 'b', 'c']

L.insert(3,'x')
print(L)


L = ['a', 'b', 'c']

L.insert(20,'x')
print(L)

61f) Removing the elements from List :

L = ['a', 'b', 'c', 'd', 'e']
L.pop()
print(L)

-----Removing elements with index value------
L = ['a', 'b', 'c']
x = L.pop(1)
print(L)


---- Delete the elelments with Indxe Value------

L = ['a', 'b', 'c']
del L[1]
print(L)



L = ['a', 'b', 'c', 'd', 'e', 'f']
del L[1:5]
print(L)


---Removing the element without using Index-------------

L = ['a', 'b', 'c']
L.remove('b')

L = ['a','$','!','^', 'c']
L.remove('$')
L.remove('!')
L.remove('^')
print(L)


------------Sorting the elements in List -----------


L = ['d', 'c', 'e', 'b', 'a']
L.sort()
print(L)


L = ['d', 'c', 'e', 'b', 'a',str(1),str(2)]
L.sort()
print(L)


----------Reverse the elements in List---------------

L.reverse()
print(L)






-----------Sprint --------------

1) 
data = "Hi all!"
#print(len(data))
for index in range(len(data)):   # 0 1 2 3 4 5 6
    print(index, data[index]

2) Slicing of String

s = 'Monty Python'
V1=s[0:5]
print(V1)
V2=s[6:12]
print(V2)


V3=s[:5]
print(V3)
V4=s[6:]
print(V4)


3) 
fruit = 'Banana'
new_word1 = fruit.upper()
new_word2 = fruit.lower()
print(new_word1,new_word2)


4) Finding the .txt files in list of files 

fileList = ["myfile.txt", "myprogram.exe", "yourfile.txt"]
for fileName in fileList:
    if ".txt" in fileName:
        print(fileName)


5)

s = 'spam'
print(s)
t = list(s)
print(t)



6) Printing the list and String in for loop 


s = 'pining for the fjords'
#v1=list(s)
#print(s)
#print(v1)
t = s.split()
print(t)

for i in s:
    print(i)
    
    
for i in s:
    print(i,end='\t')

print('print after \n')
for i in t:
    print(i)



########################## Dictionary ##################################

1) 
## Trying to get key from Disctionary

Personal_Info= {'Name' :'John', 'Age' :18}
list1=[1,2,3,4]

for Var1 in Personal_Info:
    print(Var1)

print('-----------------------')
    
for var2 in list1:
    print(var2)
    
2) #  Getting the key from Disctionary using .key()

Personal_Info= {'Name' :'John', 'Age' :18}
list1=[1,2,3,4]


for i in Personal_Info:    
	print(i)

print('-------------------')
    
key_var = Personal_Info.keys()

for i in key_var:    
	print(i)
    
    
3) #  Getting the key and values from Disctionary using .key() and .values()

Personal_Info= {'Name' :'John', 'Age' :28 , 'sal':'$5000' , 'DOJ':'2020-02-02'}
list1=[1,2,3,4]

print('-------Key Information from dict------------')

key_var = Personal_Info.keys()

for i in key_var:    
	print(i)

print('-------value Information from dict------------')
    
value_var = Personal_Info.values()

for j in value_var:    
	print(j)



4) #  Getting the key and values from Disctionary using .key() and .values()

Personal_Info= {'Name' :'John', 'Age' :28 , 'sal':'$5000' , 'DOJ':'2020-02-02'}
list1=[1,2,3,4]

print('-------Key and values Information from dict------------')

#key_var = Personal_Info.keys()

for k,v in Personal_Info.items():    
	print(k,':',v)



5) # Delete one of the Key from dictionary

Personal_Info= {'Name' :'John', 'Age' :28 , 'sal':'$5000' , 'DOJ':'2020-02-02'}

print('Before deleting the name Key',Personal_Info)

del Personal_Info['Name']

print('After deleting the name Key',Personal_Info)


6) 
# Remove the last item from dictionary

Personal_Info= {'Name' :'John', 'Age' :28 , 'sal':'$5000' , 'DOJ':'2020-02-02'}

print('Before deleting the name Key',Personal_Info)

Personal_Info.popitem()

print('After deleting the name Key',Personal_Info)


7) 

# Remove the any item from dictionary by specifying the key name

Personal_Info= {'Name' :'John', 'Age' :28 , 'sal':'$5000' , 'DOJ':'2020-02-02'}

print('Before deleting the name Key',Personal_Info)

del Personal_Info['Age']

print('After deleting the name Key',Personal_Info)


8) # List all keys from dictionary

Personal_Info= {'Name' :'John', 'Age' :28 , 'sal':'$5000' , 'DOJ':'2020-02-02'}

list(Personal_Info.keys())


8.a) # List all values from dictionary

Personal_Info= {'Name' :'John', 'Age' :28 , 'sal':'$5000' , 'DOJ':'2020-02-02'}

list(Personal_Info.values())


 
################################## Function #####################################

https://www.geeksforgeeks.org/python-functions/?ref=gcse

----Defining function with No Parameter----
56) 
def first_fun():
    print('Hello')
    
    
-----Funtion Call---------
first_fun()


-----Function with Parameter----------

def first_fun(par1):
    print('Hello',par1)
    
---Function call 
first_fun(10)


56a) # First Function defintion

def first_fun(name):
    print('Hello Guys welcome to new team Member ',name)
    


56b)  # First Function Call

print('Today is Sunday')

print('----------------------')

first_fun('Abhi')

print('----------------------')

print('Today is Sunday , lets enjoy falls')



56c) # Function return

def summation_num(x,y):
    return x+y

# function call 
summation_num(2,3)


56d) # Function without return

def summation_num(x,y):
        print('summation of two number is ', x+y)
        

# function call 
summation_num(2,3)



----------------Function with parameter and if else condition-----------

# A simple Python function to check
# whether x is even or odd
 
 
def evenOdd(x):
    if (x % 2 == 0):
        print("even")
    else:
        print("odd")
 
 
# Driver code to call the function
evenOdd(2)
evenOdd(3)


--------------divmod in Built Function--------------

var_1=divmod(10,3)

Function Call--
var_1   


-------Nested Function--------------

def outer_func():
    print('this is outer function')
    def inner_func():
        print('this is inner function')
    inner_func()
    
--function call---
outer_func() 

inner_func()  --->  Error ,because inner_func() is only defined inside outer_func() and can't called globaly.



-------------Import the Math Module ---------

import math as m
print(m.pi)


---------Define  Odd Function ------------

def odd_func(x):
    if (x%2==0):
        print('even')
    else:
        print('Odd')
        
---------Define Boolean Odd Function ------------ 
def odd_check(x):
    if x%2 == 1:
        return True
    else:
        return False
        

---------------Function with Parameter---------------
def add(num1: int, num2: int) -> int:
    """Add two numbers"""
    num3 = num1 + num2
 
    return num3
 
# Driver code
num1, num2 = 5, 15
ans = add(num1, num2)
print(f"The addition of {num1} and {num2} results {ans}.")



------The idea is to allow the caller to specify the argument name with values 
so that caller does not need to remember the order of parameters.----------------------

# Python program to demonstrate Keyword Arguments
def student(firstname, lastname):
    print(firstname, lastname)
 
 
# Keyword arguments
student(firstname='Geeks', lastname='Practice')
student(lastname='Practice', firstname='Geeks')

------------------###Variable-length arguments -------------------------
###In Python, we can pass a variable number of arguments to a function using special symbols. There are two special symbols:

*args (Non-Keyword Arguments)
**kwargs (Keyword Arguments)


def func_args(*argv):
    for i in argv:
        print(i,end=" ,")

def myfunc(*argv):
    for i in argv:
        print(i,end=" ,")


def myfunc(*args):
    for i in args:
        print(i)
        
myfunc('hello','wel')       
        
def myFun1(**kwargv):
    for key,value in kwargv.items():
        print(key,value)
        
myFun1(name='abhi',loc='marbella')


##################### Python Generator   ######################

def simplegeneratorfun(num):
    numnext=num+1
    numprev=num-1
    yield numnext
    yield numprev
    num=num-1
    
--Function Call ----

for value in simplegeneratorfun(10):
    print(value)



###############How to print without newline in Python? #############################
x=['Abhishek','welcome','To','Gurukul']

for i in x:
    print(i)
    
o/p :
Abhishek
welcome
To
Gurukul   
    
for i in x:
    print(i,end=" ")
    
o/p : Abhishek welcome To Gurukul 





################ Python end parameter in print() ############################
x=['Abhishek','welcome','To','Gurukul']

for i in x:
    print(i,end=" ")
    
o/p : Abhishek welcome To Gurukul 


#################### Python | sep parameter in print() ##################

print('Fisrt','Second',sep='@')

o/p : Fisrt@Second



#####################Random Module ###########################









####################### Handeling Files , Read, Write , Append and So on ###############3


## Where is Data

1) 1st is coming in form of Files --> .txt , .csv
2) 2nd is : SQL ( Snowflake , Postgres , MySQL , Oracle ..)
3) Matplot --> Reporting/DashBoarding

100) define function  and Opening and Reading file in Function :
    
    
  import traceback

def print_file():
    print('Hello')
    with open("C:/Abhishek/sample.txt") as filename:
       readfile = filename.read()

    print(readfile)

def print_file1():
    file=open("C:/Abhishek/sample.txt","a")
    print(file.read())
    file.close()



def print_file1():

   hs = open("C:/Abhishek/sample.txt","a")
   hs.write(name)
   hs.close() 


# Press the green button in the getter to run the script.
if __name__ == '__main__':
    print_file1()


100b) # Append the data in the existing file :



f = open("C:/Abhishek/sample.txt", "a")
f.write("Now the file has more content!")
f.close()


#open and read the file after the appending:
f = open("C:/Abhishek/sample.txt", "r")
print(f.read())


100a) # Write the data in the  file :

import random
f = open("C:/Abhishek/integers.txt", 'w') 
for count in range(500):    
	number = random.randint(1, 500)    
	f.write(str(number) + '\n') 
f.close()


100b ) 

f = open("C:/Abhishek/integers.txt", "r")
print(f.read())




########################### Regular Expression #######################################













56)  Numpy and reshape and Array 

from numpy import * 
a = array(
    [
     ['Mon',18,20,22,17],
     ['Tue',11,18,21,18],
     ['Wed',15,21,20,19],
     ['Thu',11,20,22,21],
     ['Fri',18,17,23,22],
     ['Sat',12,22,20,18],
     ['Sun',13,15,19,16],
     ['Unk',10,10,10,10]
     ]
     )
m = reshape(a,8,5))
print(m)


o/p :

[['Mon' '18' '20' '22' '17']
 ['Tue' '11' '18' '21' '18']
 ['Wed' '15' '21' '20' '19']
 ['Thu' '11' '20' '22' '21']
 ['Fri' '18' '17' '23' '22']
 ['Sat' '12' '22' '20' '18']
 ['Sun' '13' '15' '19' '16']
 ['Unk' '10' '10' '10' '10']]
 
 
 ----Numpy--------------
 
 https://www.tutorialspoint.com/python_data_structure/python_matrix.htm
 https://www.w3schools.com/python/numpy/numpy_array_reshape.asp
 
 
 
 ======================Numpy=======================
 
 1) 
 import numpy as np
 
# Creating a rank 1 Array
arr = np.array([1, 2, 3])
print("Array with Rank 1: \n",arr)


arr = np.array([[1, 2, 3],[4, 5, 6]])
print("Array with Rank 2: \n", arr)


# Creating an array from tuple
arr = np.array((1, 3, 2))
print("\nArray created using passed tuple:\n", arr)


2) 
import numpy as np

# creating list
list = [1, 2, 3, 4]

# creating numpy array
sample_array = np.array(list)
print("List in python : ", list)

print("Numpy Array in python :",sample_array)


3) Checking Data Type

print(type(list))
print(type(sample_array))



4) ---Multi Dimensional Array ------

import numpy as np

# creating list
list_1 = [1, 2, 3, 4]
list_2 = [5, 6, 7, 8]
list_3 = [9, 10, 11, 12]

# creating numpy array
sample_array = np.array([list_1,list_2,list_3])
print("Numpy multi dimensional array in python\n",sample_array)




=============================Pandas Library =================

# Spark ---> Big Data --> Apache Spark ( Python/Scala/Java) --> PySpark ---> DataFrame --> It will running on Python using your Spark Cluster ( Distributed node Cluster) 

# Python    --> Pandas ---> DataFrame --> Single machine ( Python Single node Cluster)
# Dataset   --> Just Data 
# Dataframe --> Data along with Metadata

# Pandas Data Structure :
Series     --> 
DataFrame  -->


# What is difference between Columnar and Row wise insert/Search  ??

1)  # Creating the Pandas Series 


import pandas as pd
import numpy as np

# Creating empty series
ser = pd.Series()

print(ser)

# simple array
data = np.array(['g', 'e', 'e', 'k', 's'])

ser = pd.Series(data)
print(ser)





1a) # Creating the Pandas DataFrame without Column
import pandas as pd
names = ['Katie', 'Nik', 'James', 'Evan']
pdf = pd.DataFrame(names)
print(pdf)


2) # Creating the Pandas DataFrame with Column

import pandas as pd
Names =['Katie','jon','kathya']
print(Names)
print('\n ---------------------------')
pdf=pd.DataFrame(Names,columns=['Name'])

print(pdf)



3) # Creating the Pandas DataFrame with multiple List and zip() function :


import pandas as pd

Name=['Abhi','john','Sam']
Age=[20,23,30]
State=['NJ','CA','TX']

zipped=list(zip(Name,Age,State))
print(zipped)

print('\n \n -----------------------------')


pdf=pd.DataFrame(zipped,columns=['Name','Age','ST'])

print(pdf)



4)  # Creating the Pandas DataFrame with lists of list :


import pandas as pd

multilist=[['Abhi',20,'CA'],['John',23,'CA'],['Ham',25,'TX']]

print(multilist)

pdf=pd.DataFrame(multilist,columns=['Name','Age','State'])

print(pdf)


4a) #Creating Dataframe and find the Schema of DataFrame

import pandas as pd

data={'Name':['Sam','Mike','jon'],'Age':[20,23,24], 'State':['NJ','TX','CA']}

pdf=pd.DataFrame(data)

print(pdf.info())



4b) # select  columns in Pandas DataFrame

# Import pandas package
import pandas as pd
 
# Define a dictionary containing employee data
data = {'Name':['Jai', 'Princi', 'Gaurav', 'Anuj'],
        'Age':[27, 24, 22, 32],
        'Address':['Delhi', 'Kanpur', 'Allahabad', 'Kannauj'],
        'Qualification':['Msc', 'MA', 'MCA', 'Phd']}
 
# Convert the dictionary into DataFrame 
df = pd.DataFrame(data)
 
# select two columns
print(df[['Name', 'Qualification']])




5) # Create a Pandas Dataframe from Dictionaries with Lists

import pandas as pd

dictionary={
    'Name':['John','Mike','Gypsie'],
    'Age':[23,24,25],
    'State':['NJ','CA','TX']   
    }

pdf=pd.DataFrame(dictionary)

print(pdf)



5a) # Pandas provide a unique method to retrieve rows from a Data frame. DataFrame.loc[] 

import pandas as pd

boxes = {'Color': ['Green','Green','Green','Blue','Blue','Red','Red','Red'],
         'Shape': ['Rectangle','Rectangle','Square','Rectangle','Square','Square','Square','Rectangle'],
         'Price': [10,15,5,5,10,15,15,5]
        }

df = pd.DataFrame(boxes)

select_color = df.loc[df['Color'] == 'Green']
print (select_color)




5b)  # Pandas provide a unique method to retrieve rows from a Data frame. DataFrame.loc[] 


import pandas as pd 
boxes = {'Color': ['Green','Green','Green','Blue','Blue','Red','Red','Red'],
                             'Shape': ['Rectangle','Rectangle','Square','Rectangle','Square','Square','Square','Rectangle'],
                             'Price': [10,15,5,5,10,15,15,5] } 
df = pd.DataFrame(boxes, columns= ['Color','Shape','Price']) 
color_and_shape = df.loc[(df['Color'] == 'Green') & (df['Shape'] == 'Rectangle')] 
print (color_and_shape) 








6) # Missing Data in pandas and Checking for missing values using isnull() and notnull()

# importing pandas as pd
import pandas as pd
 
# importing numpy as np
import numpy as np
 
# dictionary of lists
dict = {'First Score':[100, 90, np.nan, 95],
        'Second Score': [30, 45, 56, np.nan],
        'Third Score':[np.nan, 40, 80, 98]}
 
# creating a dataframe from dictionary
df = pd.DataFrame(dict)
 
# filling missing value using fillna()  
print(df.isnull())


6a) # Missing Data in pandas and Checking for missing values using fillna()

# importing pandas as pd
import pandas as pd
 
# importing numpy as np
import numpy as np
 
# dictionary of lists
dict = {'First Score':[100, 90, np.nan, 95],
        'Second Score': [30, 45, 56, np.nan],
        'Third Score':[np.nan, 40, 80, 98]}
 
# creating a dataframe from dictionary
df = pd.DataFrame(dict)
 
# filling missing value using fillna()  
print(df.fillna(0))



7) # Pandas and  Reading Excel File :

# import pandas lib as pd
import pandas as pd
# read by default 1st sheet of an excel file
pdf = pd.read_excel(r'C:\Abhishek\3.xlsx')
print(pdf)


8)#  Pandas and XlsxWriter 

# import pandas as pd
import pandas as pd

# Create a Pandas dataframe from some data.
df = pd.DataFrame({'Data': ['Welcome', 'To', 'Python', 'Advance',
							'Class']})

# Create a Pandas Excel writer
# object using XlsxWriter as the engine.
writer = pd.ExcelWriter(r'C:\Abhishek\DataFiles\SampleWrier.xlsx',engine ='xlsxwriter')

# Write a dataframe to the worksheet.
df.to_excel(writer, sheet_name ='Sheet1')

# Close the Pandas Excel writer
# object and output the Excel file.
writer.save()



9) #  Pandas and XlsxWriter  and Multiple Sheet



# import pandas as pd
import pandas as pd


# Create some Pandas dataframes from some data.
df1 = pd.DataFrame({'Data': [11, 12, 13, 14]})
df2 = pd.DataFrame({'Data': [21, 22, 23, 24]})
df3 = pd.DataFrame({'Data': [31, 32, 33, 34]})

# Create a Pandas Excel writer object
# using XlsxWriter as the engine.
writer = pd.ExcelWriter(r'C:\Abhishek\DataFiles\SampleWriter1.xlsx',engine ='xlsxwriter')

# Write each dataframe to a different worksheet.
df1.to_excel(writer, sheet_name ='Sheet1')
df2.to_excel(writer, sheet_name ='Sheet2')
df3.to_excel(writer, sheet_name ='Sheet3')

# Close the Pandas Excel writer object
# and output the Excel file.
writer.save()




10) # Pandas and Positioning dataframes in a worksheet using Pandas and XlsxWriter

# import pandas as pd
import pandas as pd

# Create some Pandas dataframes from some data.
df1 = pd.DataFrame({'Data': [11, 12, 13, 14]})
df2 = pd.DataFrame({'Data': [21, 22, 23, 24]})
df3 = pd.DataFrame({'Data': [31, 32, 33, 34]})
df4 = pd.DataFrame({'Data': [41, 42, 43, 44]})

# Create a Pandas Excel writer object
# using XlsxWriter as the engine.
writer = pd.ExcelWriter(r'C:\Abhishek\DataFiles\SampleWriter1_positioning.xlsx',engine ='xlsxwriter')

# write and Positioning the dataframes in the worksheet.
# Default position, cell A1.
df1.to_excel(writer, sheet_name ='Sheet1')
df2.to_excel(writer, sheet_name ='Sheet1', startcol = 3)
df3.to_excel(writer, sheet_name ='Sheet1', startrow = 6)

# It is also possible to write the
# dataframe without the header and index.
df4.to_excel(writer, sheet_name ='Sheet1',
			startrow = 7, startcol = 4,
			header = False, index = False)

# Close the Pandas Excel writer object
# and output the Excel file.
writer.save()




===========Assestemnt===========11/12=============

---------------Hacker Rank-------------------

1) https://www.hackerrank.com/challenges/list-comprehensions/problem?isFullScreen=true
2) https://www.hackerrank.com/challenges/swap-case/problem?isFullScreen=true
3) https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem?isFullScreen=true
4) https://www.hackerrank.com/challenges/python-string-split-and-join/problem?isFullScreen=true
5) https://www.hackerrank.com/challenges/py-collections-namedtuple/problem?isFullScreen=true



---------------Hacker Earth-------------------

1) https://www.hackerearth.com/problem/algorithm/balanced-sub-arrays-721099e9/?source=list_view
2) https://www.hackerearth.com/problem/algorithm/longest-subsequence-queries-9c45a765/?source=list_view
3) https://www.hackerearth.com/problem/algorithm/equal-parity-ccc0c1dd/?source=list_view




------------Litcode --------------
1) https://leetcode.com/problems/longest-common-prefix/
2) https://leetcode.com/problems/merge-two-sorted-lists/
3) https://leetcode.com/problems/remove-duplicates-from-sorted-array/
4) https://leetcode.com/problems/palindrome-number/


