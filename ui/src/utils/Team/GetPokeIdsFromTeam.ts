const apiUrl = "http://localhost:3001";

export default async function getPokeIdsFromTeam(teamId: number) {
  let response = await fetch(`${apiUrl}/pokeapi/team/${teamId}`);
  let ids: number[] = await response.json();
  return ids;
}
