#Problem 1: Return Book
def return_book(title, library):
    print("----------------------------------")
    if title in library:
        library[title] += 1
    else:
        library[title] = 1
    return library
    pass
library = {"The Hobbit": 2, "1984": 1, "The Great Gatsby": 4}

updated_lib = return_book("1984", library)
print(updated_lib)

updated_lib = return_book("The Giver", library)
print(updated_lib)

#Problem 2: Dictionary Difference
def dict_difference(d1, d2):
    print("----------------------------------")
    results = {}
    for key in d1:
        if key not in d2:
            results[key] = d1[key]
        else:
            if d1[key] != d2[key]:
                results[key] = d1[key]
    return results
    pass
d1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
d2 = {'b': 2, 'd': 1}
print(dict_difference(d1, d2))

#Problem 3: Take from Stock
def pop_stock(items, item_name, quantity):
    print("----------------------------------")
    if item_name in items:
        currentStock = items[item_name]
        if quantity > currentStock:
            return 'Not enough stock.'
        else:
            items[item_name] -= quantity
            return items
    else:
        return 'Item does not exist.'
    #pass
items = {"chocolate": 20, "candy": 5, "chips": 10}

print(pop_stock(items, "candy", 2))
print(pop_stock(items, "candy", 5))
print(pop_stock(items, "lollipops", 5))
print(pop_stock(items, "chocolate", 5))

#Problem 4: Group By Frequency
def group_by_frequency(lst):
    print("----------------------------------")
    freq = {}
    result = {}
    for item in lst:
        if item in freq:
            freq[item] += 1
        else:
            freq[item] = 1
    for key, value in freq.items():
        if value not in result:
            result[value] = []
            result[value].append(key)
        else:
            result[value].append(key)
    return result
    pass
lst = ['a', 'b', 'c', 'd', 'd', 'c', 'e', 'e', 'e']
print(group_by_frequency(lst))
#output: { 1 : ['a', 'b'], 2: ['c', 'd'], 3: ['e']}

#Problem 5: No Duplicates Allowed
def remove_duplicates_from_front(nums):
    print("----------------------------------")
    results = []
    dupls = {}
    for num in nums:
        dupls[num] = dupls.get(num, 0) + 1
    print('what is duplicates:', dupls)
    return results
    pass
nums = [6,5,3,5,2,8,3]
print(remove_duplicates_from_front(nums))
#output:[6,5,2,8,3]