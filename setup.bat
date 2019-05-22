echo Batch to delete file

mkdir dist\cooltz\js | xcopy www\js dist\cooltz\js /O /X /E /H /K 

del www /f /q | mkdir www  | xcopy dist\cooltz www  /O /X /E /H /K

echo Done!