import Data.List
import System.IO

main = do
  putStrLn "Please enter your name: "
  name <- getLine
  putStrLn ("Hello " ++ name)
