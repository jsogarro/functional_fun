import Data.List
import System.IO

factorial :: Int -> Int
factorial 0 = 1
factorial n = n * factorial (n - 1)


areStringsEqual :: [Char] -> [Char] -> Bool
areStringsEqual [] [] = True
areStringsEqual (x:xs) (y:ys) = x == y && areStringsEqual xs ys
