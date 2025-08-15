def mystery_function(key, value, dictionary):
    if key in dictionary:
        dictionary[key].append(value)
    else:
        dictionary[key] = [value]
    return dictionary
    pass
dictionary = {'a': [1, 2], 'b': [3, 4]}
output = mystery_function('c', 5, dictionary)
print(output)


def get_patients(doctor, patients):
    allPatients = []
    for patient in patients:
        ptDoc = patients[patient]
        if ptDoc == doctor:
            allPatients.append(patient)
    return allPatients
    pass
patients = { "Jane Doe": "Dr. Grey", "John Doe": "Dr. Bailey",
"Alexandra Stevens": "Dr. Grey", "Paulo Freire": "Dr. Stevens"}
doctor = "Dr. Grey"
print(get_patients(doctor, patients))

patients2 = {"Ethan Hunt": "Dr. Banner",
"James Bond": "Dr. Banner", "Bruce Wayne": "Dr. Banner"}
doctor2 = "Dr. Banner"
print(get_patients(doctor2, patients2))

def find_unique(nums):
    # Write your code here
    unique = {}
    uniqueNum = 0
    for num in nums:
        if num in unique:
            unique[num] += 1
        else:
            unique[num] = 1
    
    for item, count in unique.items():
        if count == 1:
            uniqueNum = item
    return uniqueNum
    pass
num1 = [4, 1, 2, 1, 2]
num2 = [2, 2, 1]
print(find_unique(num1))
print(find_unique(num2))