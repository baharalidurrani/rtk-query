import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TPokemon } from "./pokemon.type"

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<TPokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    postPokemon: builder.mutation<TPokemon, string>({
      query: (name) => ({ url: `pokemon/${name}`, method: "POST" }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, usePostPokemonMutation } = pokemonApi
