# import os

# path = "C:\\Users\\dboateng089\\Downloads\\Design Elements"

# if os.path.exists(path):
#     print("hello bro the file path exist")
#     if os.path.isfile(path):
#         print("that is a file")
#     elif os.path.isdir(path):
#         print("That is a folder")
# else:
#     print("Hello bro the file path does not exist")

# try:
#     with open(Readme.md) as file:
#         print(file.read())
# except NameError:
#               print("the name of the file is not correct")

# with open ("Bible Quotes") as file:
#      print(file.read())


# text= "Hello it's Derrick \n writing in this file "
# with open(Readme.md, "w") as file:
#      file.write(text)


#      source = "test.txt"
#      destination = "C:\\Users\\dboateng089"


#      try:
#           if os.path.exisits(destination):
#                print("there is a alrady a file there")
#           else:
#                os.replace(source.destination)
#                print(source +"was moved")
#      except FileNotFoundError:
#           print(source + "was not found")



name= "Derrick Boateng"
age = 20
school = "University of Ghana"

if age>=18:
    print("You are eligible to vote")
elif age<18 and age<=15:
    print("You need more time to think")
else :
    print("hey you are too young for this")

if school== "University of Ghana":
        print("you are a dbee")
elif school == "KNUST":
        print("send me money")
else:
        print("na so we dey do for here")
