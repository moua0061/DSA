#Problem 1: Subsequence
def is_subsequence(lst, sequence):
    #pass
    print("----------------------------------")
    pointerA = 0
    pointerB = 0
    while pointerB < len(lst) and pointerA < len(sequence):
        if sequence[pointerA] == lst[pointerB]:
            pointerA += 1
        pointerB += 1
    return pointerA == len(sequence)
lst = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
print(is_subsequence(lst, sequence))

#Problem 2: Create a Dictionary
def create_dictionary(keys, values):
    #pass
    print("----------------------------------")
    indx = 0
    dict = {}
    while indx < len(keys) and indx < len(values):
        ky = keys[indx]
        dict[ky] = values[indx]
        indx += 1
    #dict.items() prints the key-value pairs in an array 
    #[('peanut', 'butter'), ('dragon', 'fly'), ('star', 'fish'), ('pop', 'corn'), ('space', 'ship')]
    return dict
keys = ["peanut", "dragon", "star", "pop", "space"]
values = ["butter", "fly", "fish", "corn", "ship"]
print(create_dictionary(keys, values))

#Problem 3: Print Pair
def print_pair(dictionary, target):
    print("----------------------------------")
    if target in dictionary:
        print("Key:", target)
        print("Value:", dictionary[target])
    else:
        print("That pair does not exist!")
    #pass
dictionary = {"spongebob": "squarepants", "patrick": "star", "squidward": "tentacles"}
print_pair(dictionary, "patrick")
print_pair(dictionary, "plankton")
print_pair(dictionary, "spongebob")

#Problem 4: Keys Versus Values
def keys_v_values(dictionary):
    print("----------------------------------")
    #keys = dictionary.keys()
    #values = dictionary.values()
    keySum = sum(dictionary.keys())
    valuesSum = sum(dictionary.values())
    #for key in keys:
        #keySum += key
    #for value in values:
        #valuesSum += value
    if keySum > valuesSum:
        print("keys")
    elif valuesSum > keySum:
        print("values")
    else:
        print("balanced")
    #pass
dictionary1 = {1:10, 2:20, 3:30, 4:40, 5:50, 6:60}
keys_v_values(dictionary1)
dictionary2 = {100:10, 200:20, 300:30, 400:40, 500:50, 600:60}
keys_v_values(dictionary2)

#Problem 5: Restock Inventory
def restock_inventory(current_inventory, restock_list):
    print("----------------------------------")
    for key, value in restock_list.items ():
        #print(key)
        if key not in current_inventory:
            #current_inventory.append(item)
            current_inventory[key] = value
        else:
            current_inventory[key] += value
    return current_inventory
    #pass
current_inventory = {
    "apples": 30,
    "bananas": 15,
    "oranges": 10
}

restock_list = {
    "oranges": 20,
    "apples": 10,
    "pears": 5
}
print(restock_inventory(current_inventory, restock_list))

#Problem 6: Calculate GPA
def calculate_gpa(report_card):
    print("----------------------------------")
    gradePoints = [('A', 4), ('B', 3), ('C', 2), ('D', 1), ('F', 0)]
    total = 0
    totalGrades = len(report_card)
    print(gradePoints[0])
    for grade in report_card.values():
        if grade == 'A':
            total += 4
        elif grade == 'B':
            total += 3
        elif grade == 'C':
            total += 2
        elif grade == 'D':
            total += 1
        else:
            total += 0
    gpa = total / totalGrades
    return gpa
    #pass
report_card = {"Math": "A", "Science": "C", "History": "A", "Art": "B", "English": "B", "Spanish": "A"}
print(calculate_gpa(report_card))

#Problem 7: Best Book
def highest_rated(books):
    print("----------------------------------")
    highestRating = 0
    result = {}
    for book in books:
        bookRating = (book['rating'])
        if bookRating > highestRating:
            highestRating = bookRating
            result = book
    return result
    #pass
books = [
    {"title": "Tomorrow, and Tomorrow, and Tomorrow",
     "author": "Gabrielle Zevin",
     "rating": 4.18
    },
    {"title": "A Fortune For Your Disaster",
     "author": "Hanif Abdurraqib",
     "rating": 4.47
    },
    {"title": "The Seven Husbands of Evenlyn Hugo",
     "author": "Taylor Jenkins Reid",
     "rating": 4.40
    }
]
print(highest_rated(books))

#Problem 8: Index-Value Map
def index_to_value_map(lst):
    print("----------------------------------")
    myDict = {}
    for i in range(0, len(lst)):
        myDict[i] = lst[i]
    return myDict
    pass
lst = ["apple", "banana", "cherry"]
print(index_to_value_map(lst))