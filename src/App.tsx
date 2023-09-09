import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import './App.css'
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";


function App() {
  return (
    <>
      <Grid templateAreas={{
        base: '"nav" "main',
        lg: '"nav nav" "aside main',
      }}
      >
        <GridItem>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" bg="green">
            aside
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
