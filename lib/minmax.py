def minmax(arr):
    arr.sort()

    min_value = sum(arr[:4]) #first four elements in an array
    max_value = sum(arr[1:]) #last four elements in an array

    print(min_value, max_value)

arr = [1,2,3,4,5]
print(minmax(arr))