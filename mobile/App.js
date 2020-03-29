import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

/* View no lugar de containers (div, span, aside, header...)
 Text no lugar de texto (h1, p)
 StyleSheet.create para criar os estilos CSS

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a tela toda, em react native é display flex por padrão
    backgroundColor: '#7159c1', // não tem hífen para separar as propriedades (background-color)
    alignItems: 'center',  // se não for número, tem que ter aspas simples em volta
    justifyContent: 'center',
  },
  title: {
    color: '#fff',  // não existe herança de estilos, precisa de estilo próprio para cada componente
  }
});

*/