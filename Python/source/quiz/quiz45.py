a = input('세 개의 수를 입력하세요(,로 분류): ')
a=a.split(',')
b=int(a[a])
print(b)
if b[0]==1 :
    print(b[1]+b[2])
elif b[0]==2 :
    print(b[1]-b[2])
elif b[0]==3 :
    print(b[1]*b[2])