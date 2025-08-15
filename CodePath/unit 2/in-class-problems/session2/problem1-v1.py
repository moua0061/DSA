#Problem 1: Cast Vote
def cast_vote(votes, candidate):
    #to look thru the votes dic,
    #see if the candidtate is in there 
    #if candidate is in there, add 1
    #if not, add the candidate and add 1 to it 
    print("----------------------------------")
    if candidate in votes:
        votes[candidate] += 1
    else:
        votes[candidate] = 1
    return votes
    pass
votes = {"Alice": 5, "Bob": 3}
cast_vote(votes, "Alice")
print(votes)
cast_vote(votes, "Gina")
print(votes)

#Problem 2: Keys in Common
def common_keys(dict1, dict2):
    print("----------------------------------")
    common = []
    for key in dict1:
        if key in dict2:
            common.append(key)
    return common
	#pass
dict1 = {"a": 1, "b": 2, "c": 3}
dict2 = {"b": 4, "c": 5, "d": 6}
common_list = common_keys(dict1, dict2)
print(common_list)

#Problem 3: Highest Priority Task
def get_highest_priority_task(tasks):
    print("----------------------------------")
    highestTask = 1
    taskName = ''
    #next(iter(tasks))
    for task, priority in tasks.items():
        if priority >= highestTask:
            highestTask = priority
            taskName = task
            if task < taskName:
                taskName = task
    tasks.pop(taskName)
    #if priority == highestTask:
        #tasks.pop(task)
    # print(taskName)
    # print(highestTask)
    # print(tasks)
    return taskName
	#pass
tasks = {"task1": 8, "task4": 10, "task3": 9, "task2": 10, "task5": 7}
perform_task = (get_highest_priority_task(tasks))
print(perform_task)

perform_task = (get_highest_priority_task(tasks))
print(perform_task)

perform_task = (get_highest_priority_task(tasks))
print(perform_task)

print(tasks)

#Problem 4: Frequency Count
def count_occurrences(nums):
    print("----------------------------------")
    results = {}
    #keys = integers
    #values = count 
    #look thru each integer in nums
    for integer in nums:
        #print(integer)
        #add to dict(results) if not exist
        if integer not in results:
            results[integer] = 1
        #else (if exist), add 1 to the count
        else:
            results[integer] += 1
    return results
    pass
nums = [1, 2, 2, 3, 3, 3, 4]
print(count_occurrences(nums))

#Problem 5: Find Majority Element
def find_majority_element(elements):
    print("----------------------------------")
    #need a variable to hold the majority element : n/2
    majorityElement = len(elements) / 2

    #need to keep track of each element of how often they appear
    #need a dict: key = integer/value = count
    keepingTrack = {}

    #go through each integer in nums list
    for num in elements:
        #if num does not exist in dict, add it
        if num not in keepingTrack:
            keepingTrack[num] = 1
        #else, add 1 to the count
        else:
            keepingTrack[num] += 1

    #go thru dict
    for key, count in keepingTrack.items():
        #if the count for the integer is > the majority element, return it
        if count > majorityElement:
            return key
        
    #else return none
    return None
    pass
elements = [2, 2, 1, 1, 1, 2, 2]
print(find_majority_element(elements))

#Problem 6: Has Duplicates
def hasDuplicates(nums, k):
    print("----------------------------------")
    #need a dict to keep track of duplicated integers
    duplicated = {}

    if k > len(nums):
        #check all nums
        for num in nums:
            addToDict(num, duplicated)
    else:
        #go thru each interger in nums list up to the k + 1 length
        for i in range(0, k + 1):
            num = nums[i]
            addToDict(num, duplicated)

    #go thru the dict
    for value in duplicated.values():
        if value >= 2:
            return True
    #return true if the first value is >= 2 
        

    return False 
	#pass

#helper function:
def addToDict(key, dict):
    # if num not in duplicated:
    if key not in dict:
        #add to dict if not exist & set duplicated count to 1
        dict[key] = 1
    else:
        #else add 1 to it
        dict[key] += 1
nums = [5, 6, 8, 2, 6, 4, 9]
nums2 = [23, 78, 18, 12, 6, 4, 6]
check1 = hasDuplicates(nums, 3)
print('hasDuplicates1', check1)
check2 = hasDuplicates(nums, 5)
print('hasDuplicates2',check2)
check3 = hasDuplicates(nums2, 10)
print('hasDuplicates3',check3)

#Problem 7: Make Pairs
def divideList(nums):
    print("----------------------------------")
    #pairs = key/value -> need a dict to keep track of each pair?
    pairs = {}
    #go thru each item in the list
    for num in nums:
        if num not in pairs:
            pairs[num] = 1
        else:
            pairs[num] += 1

    for value in pairs.values():
        #pair = length % 2 = 0 -> true
        if value % 2 == 0:
            return True
    return False
    pass
numsList = [1, 1, 1]
print('divideList:', divideList(numsList))