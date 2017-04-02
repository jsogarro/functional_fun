{-|
  More Haskell examples taken from Haskel in One Video
-}
import Data.List
import System.IO

-- types
const5 :: Int
const5 = 5

sumOneTo100 = sum [1..1000]

-- math operators
addVal = 5 + 4
subVal = 5 - 4
multVal = 5 * 4
divVal = 5 / 4
modVal = 5 `mod` 4

-- negative numbers should be wrapped in parentheses
negNumEx = 5 + (-4)

-- converting types
number9 = 9 :: Int
squareOfNine = sqrt (fromIntegral number9)

-- Built in math functions
piVal = pi
ePow9 = exp 9
logOf9 = log 9
squared9 = 9 ** 2
truncateVal = round 9.999
ceilingVal = ceiling 9.999
floorVal = floor 9.99

-- logical operators
trueAndFalse = True && False
trueOrFalse = True || False
notTrue = not True

-- lists
primeNumbers = [3,5,7,11]
morePrime = primeNumbers ++ [13,17,19,23,29]
favNums = 2 : 7 : 21 : 66 :[]
is7Prime = 7 `elem` primeNumbers

zeroToTen = [0..10]
evenList = [2,4..20]
letterList = ['A', 'C'..'Z']
infinPow10 = [10,20..]
firstInfinPow10 = take 10 infinPow10

-- list comprehension
listTiems3 = [x * 2 | x <- [1..10], x * 3 <= 50]
divisBy9And13 = [x | x <- [1..500], x `mod` 9 == 0, x `mod` 13 == 0]

-- lazy evaluation
evensUpTo20 = takeWhile (<=20) [2,4..]

-- fold
multOfList = foldl (*) 1 [2,3,4,5]

-- conditionals
doubleEvenNumber y =
  if (y `mod` 2 /= 0)
    then y
    else y * 2

-- case
getNameOfInt :: Int -> String
getNameOfInt n = case n of
  1 -> "One"
  2 -> "Two"
  3 -> "Three"
  _ -> show n
