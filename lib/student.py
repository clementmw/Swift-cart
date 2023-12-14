class Student:
    def __init__(self, name,age):
        self.name = name
        self.age = age
    def signin (self):
        print(f"{self.name} signed up")

clement = Student("clement", 25)
clement.signin()
