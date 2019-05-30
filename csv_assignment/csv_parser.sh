#!/usr/bin/env bash
sortByFirstLastThenSortValueAndRemoveDups(){
  csv_filename=$1
  sort -t, -k2,2 -k1,1 $csv_filename | sort -t, -u -k3,3
}

## solution for small jobs
smallSolution(){
  rm -rf divided_by_company; ## clear out csv's jobs, if you want to save them move them to a stable folder.
  mkdir divided_by_company;
  csv_filename=$1;
  cd divided_by_company; awk -F, 'gsub(/"/, "", $3);{print > $3}' ../$1; cd ..;
}

## scalable solution
scalableSolution(){
  rm -rf divided_by_company; ## clear out csv's jobs, if you want to save them move them to a stable folder.
  csv_filename=$1;
  mkdir divided_by_company;
  cd divided_by_company; awk -F, 'gsub(/"/, "", $3);{print > $3};{close($3);}' ../$csv_filename; cd ..;
  cd divided_by_company; for f in * ; do (echo "$f" && awk "/${f}/ { print }" ../$csv_filename > $f); done && cd ..;
}

sorter(){
  cd divided_by_company; for f in * ; do (sortByFirstLastThenSortValueAndRemoveDups $f); done && cd ..;
}

scalableSolution info.csv
sorter
