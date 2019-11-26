#!/bin/bash

#for i in resized/*.jpg
#do convert $i -resize "64x64>" resized/"${i////_}"
#done

#for f in resized/*.jpg
#do
	#convert -resize 64x64 $f "${f////_}"
#	echo $f
#	convert -resize 64x64 $f "${f////}"
#done

for f in *.jpg
do
	#convert -resize 64x64 $f "${f////_}"
	#echo $f
	convert -resize 512x512 $f "../Portraits/${f////}"
done