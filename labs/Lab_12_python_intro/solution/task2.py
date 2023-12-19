n = int(input())
X = []

for i in range(n):
    X.append(int(input()))

medians = []

for i in range(n):
    X[:i+1]= sorted(X[:i+1])

    if (i + 1) % 2 == 1:
        median = X[(i + 1) // 2]
    else:
        median = X[i // 2]

    medians.append(median)

sum = 0
for median in medians:
    sum += median
print(sum)
