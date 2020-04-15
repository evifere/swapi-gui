mongoimport --db swapidb --collection films --authenticationDatabase admin --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD --drop --jsonArray --file /dockerseed/films.json
mongoimport --db swapidb --collection people --authenticationDatabase admin --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD --drop --jsonArray --file /dockerseed/people.json
mongoimport --db swapidb --collection planets --authenticationDatabase admin --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD --drop --jsonArray --file /dockerseed/planets.json
mongoimport --db swapidb --collection species --authenticationDatabase admin --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD --drop --jsonArray --file /dockerseed/species.json
mongoimport --db swapidb --collection starships --authenticationDatabase admin --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD --drop --jsonArray --file /dockerseed/starships.json
mongoimport --db swapidb --collection vehicles --authenticationDatabase admin --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD --drop --jsonArray --file /dockerseed/vehicles.json


#mongoimport --db swapidb --collection films --username swapiapp --password swapipwd --drop --file /dockerseed/films.json
