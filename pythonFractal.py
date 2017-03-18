
#  <-- in python, hashtags are used to tell the computer that a line is not worth reading
#  much like in social media
 
 
##to run this you code need, python 2.7 and numpy
 
## here we have a scripted program, the computer reads each line, line by line, and then
#excecutes them
 
 
## this section imports libraries the program needs (code written by other people)
import numpy as np
from pylab import imshow, show
 
## below is a variable, a name that stores numbers or words
thisISaVariable = 5 #here we set the variable "thisISaVariable" equal to 5 as an illustration
 
#this variable sets how many iterations we perform
max_iters = 20
 
##below is a "function" called "mandel", it takes some variables "(x, y, max_iters)" to do some task
## this one checks if our value in each box is bigger than 4
def mandel(x, y, max_iters):
  c = complex(x, y)   # here we are setting c equal to the coordinate of the box
  z = 0.0j            # here we set our initial conditions for z = 0
  for i in range(max_iters):   #this is a "for" loop- it runs from i = 1 to i = max_iters 
    z = z*z + c
    if (z.real*z.real + z.imag*z.imag) >= 4: #this tests if the magnitude is larger than 4
      return i    #this returns to the main program how many iterations it took before z became > 4
  return max_iters
 
 
##this is the main "function" of the program calls "mandel" at each pixel, then builds it into an image
def create_fractal(min_x, max_x, min_y, max_y, image, iters):
  height = image.shape[0]
  width = image.shape[1]
 
  pixel_size_x = (max_x - min_x) / width
  pixel_size_y = (max_y - min_y) / height
     
  for x in range(width):            # this loops through all the points in a row
    real = min_x + x * pixel_size_x
    for y in range(height):         # this loops through all the points in a column
      imag = min_y + y * pixel_size_y
      color = mandel(real, imag, iters) #this calls the mandel function on each point
      image[y, x] = color
      imshow(image) #this plots the image
      show()  
 
image = np.zeros((1024, 1536), dtype = np.uint8)  #this generates the image the data will be saved to
create_fractal(-2.0, 1.0, -1.0, 1.0, image, max_iters) #this calls the main function and gives it some values
 
# imshow(image) #this plots the image
# show()        