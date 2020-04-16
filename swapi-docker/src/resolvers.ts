import { Resolver, Query, Arg } from "type-graphql";
import { people, planets, /*films,*/ vehicles, starships, species } from './records';
import { Person } from "./types/Person";
import { Planet } from "./types/Planet";
import { Film,FilmsModel } from "./types/Film";
import { Vehicle } from "./types/Vehicle";
import { Starship } from "./types/Starship";
import { Species } from "./types/Species";

// https://github.com/graphql/graphql-js/issues/1989
// clone response to avoid graphql error
// Cannot return null for non-nullable field Film.title or any other field
function f_clone_response(res)
{
  return JSON.parse(JSON.stringify(res));
}

@Resolver()
export class PersonResolver {
  @Query(returns => [Person])
  public people(
    @Arg("skip")
    skip: number = 10,
    @Arg("first")
    first: number = 1,
    @Arg("filter", { nullable: true })
    filter?: String
  ) {
    console.log('endpoint people', people.length, skip, first, (first + skip));
    return people.slice(first, (first + skip));
  }

  @Query(returns => Person, { nullable: true })
  public person(
    @Arg("name")
    name: string
  ) {
    console.log('endpoint person p name ', name);
    return people.find(p => p.name === name);
  }
}

@Resolver()
export class PlanetResolver {
  @Query(returns => [Planet])
  public planets() {
    return planets;
  }

  @Query(returns => Planet, { nullable: true })
  public planet(
    @Arg("name")
    name: string
  ) {
    console.log('endpoint planet p name ', name);
    return planets.find(p => p.name === name);
  }
}

@Resolver(_of => Film)
export class FilmResolver {
  @Query(returns => [Film])
  public async films() {
    console.log('FilmsModel.find')
    return f_clone_response(await FilmsModel.find());
  }

  @Query(returns => Film, { nullable: false })
  async film(
    @Arg("episode_id")
    episode_id: number
  ) {
    console.log('endpoint film f episode_id ', episode_id);

    return f_clone_response(await FilmsModel.findOne({episode_id:episode_id}));
  }

}

@Resolver()
export class VehiclesResolver {
  @Query(returns => [Vehicle])
  public vehicles() {
    return vehicles;
  }
  @Query(returns => Vehicle, { nullable: true })
  public vehicle(
    @Arg("name")
    name?: string
  ) {
    console.log('endpoint vehicle v name ', name);
    return vehicles.find(v => v.name === name);
  }
}

@Resolver()
export class StarshipsResolver {
  @Query(returns => [Starship])
  public starships() {
    return starships;
  }
  @Query(returns => Starship, { nullable: true })
  public starship(
    @Arg("name")
    name?: string
  ) {
    console.log('endpoint starships s name ', name);
    return starships.find(s => s.name === name);
  }
}

@Resolver()
export class SpeciesResolver {
  @Query(returns => [Species])
  public species() {
    return species;
  }

  @Query(returns => Species, { nullable: true })
  public specie(
    @Arg("name")
    name?: string
  ) {
    console.log('endpoint species s name ', name);
    return species.find(s => s.name === name);
  }
}