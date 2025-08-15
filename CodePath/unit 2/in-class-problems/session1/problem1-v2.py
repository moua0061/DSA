#Problem 1: Is Monotonic
def is_monotonic(nums):
    print("----------------------------------")
    isIncreasing = False
    isDecreasing = False
    for i in range(1, len(nums)):
        currentVal = nums[i]
        prevVal = nums[i - 1]
        if(currentVal >= prevVal):
            isIncreasing = True
        else:
            isIncreasing = False
            break
    for i in range(1, len(nums)):
        currentVal = nums[i]
        prevVal = nums[i - 1]
        if(currentVal <= prevVal):
            isDecreasing = True
        else:
            isDecreasing = False
            break
    print("is increasing? ", isIncreasing)
    print("is decreasing? ", isDecreasing)
    if isDecreasing or isIncreasing:
        return True
    else:
        return False
    #return isDecreasing and isIncreasing 
    #pass
nums1 = [1,2,2,3,10]
print(is_monotonic(nums1))

nums2 = [12,9,8,3,1]
print(is_monotonic(nums2))

nums3 = [1,1,1]
print(is_monotonic(nums3))

nums4 = [1,9,8,3,5]
print(is_monotonic(nums4))

#Problem 2: Student Directory
def student_directory(student_names):
    print("----------------------------------")
    map = {}
    for i in range(0, len(student_names)):
        index = i + 1
        map[student_names[i]] = index
    return map
    pass
student_names = ["Ada Lovelace", "Tu Youyou", "Mae Jemison", "Rajeshwari Chatterjee", "Alan Turing"]
print(student_directory(student_names))

#Problem 3: Dictionary Description
def get_description(info, keys):
    print("----------------------------------")
    #for key in keys:
    for i in range(0, len(keys)):
        key = keys[i]
        print(info.get(key, None))
info = {"name": "Tom", "age": "30", "occupation": "engineer"}
keys = ["name", "occupation", "salary"]
get_description(info, keys)

#Problem 4: Sum Even Values
def sum_even_values(dictionary):
    print("----------------------------------")
    sum = 0
    for key, value in dictionary.items():
        #print(value)
        if value % 2 == 0:
            sum += value
        #print(value)
    return sum
    pass
dictionary = {"a": 4, "b": 1, "c": 2, "d": 8, }
print(sum_even_values(dictionary))

#Problem 5: Merge Catalogs
def merge_catalogs(catalog1, catalog2):
    print("----------------------------------")
    pass
catalog1 = {"apple": 1.0, "banana": 0.5}
catalog2 = {"banana": 0.75, "cherry": 1.25}