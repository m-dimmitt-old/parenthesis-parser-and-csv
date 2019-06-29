#!/usr/bin/env bash

splitCsvByinsuranceName(){
  awk -F, 'gsub(/"/, "", $3);{print > $3};{close($3);}' ../$csv_filename
}

populateChildFileWithData(){
  echo "$1" && awk "/${1}/ { print }" ../$csv_filename > $1
}

sortByFirstLastThenSortByValueAndRemoveDups(){
  csv_filename=$1
  path=$(pwd)
  file_path=$path/$csv_filename
  sort -t, -r -k4,4 $file_path | sort -t, -u -k2,2 -k1,1 > $(echo $file_path)_sorted.csv
}

populateAndSort(){
    populateChildFileWithData $1; 
    sortByFirstLastThenSortByValueAndRemoveDups $1;
}

## scalable solution
scalableSolution(){
  rm -rf divided_by_company; ## clear out csv's jobs, if you want to save them move them to a stable folder.
  csv_filename=$1;
  mkdir divided_by_company;
  cd divided_by_company; splitCsvByinsuranceName $csv_filename; cd ..;
  for f in divided_by_company/* ; do (populateAndSort $f); done;
}

scalableSolution info.csv
