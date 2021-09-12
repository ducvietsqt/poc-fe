
MODE=$1

if [ "prod" != "$MODE" ]
then
  MODE="stage"
fi

echo *********************************
echo * START BUILD: $MODE
echo *********************************

echo Copy configuration
cp -r .env.$MODE .env

echo Building...
vue-cli-service build 
shopt -s dotglob

echo Copying dist folder ...
mkdir -p html 

rm -f html/$MODE.gz
tar -cvzf html/$MODE.gz dist/
#tar -xvzf stage.gz -C /app/html --strip-components=1

echo Restore configuration
cp -r .env.dev .env