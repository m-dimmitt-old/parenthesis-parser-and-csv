
sort -t, -k2,2 -k1,1 100-contacts.csv | sort -t, -u -k3,3

## solution for small jobs
smallSolution(){
  mkdir divided_by_company;
  csv_filename=$1;
  cd divided_by_company; awk -F, 'gsub(/"/, "", $3);{print > $3}' ../$1; cd ..;
}

## scalable solution
scalableSolution(){
  csv_filename=$1;
  mkdir divided_by_company;
  cd divided_by_company; awk -F, 'gsub(/"/, "", $3);{print > $3};{close($3);}' ../$csv_filename; cd ..;
  cd divided_by_company; for f in * ; do (echo "$f" && awk "/${f}/ { print }" ../$csv_filename && cd ..;); done
}

scalableSolution info.csv
