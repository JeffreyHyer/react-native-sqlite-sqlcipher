# react-native-sqlite-sqlcipher

SQLite with SQLCipher encryption support for React Native

## Installation

```sh
npm install react-native-sqlite-sqlcipher
```

## Usage

```js
import SQLite from "react-native-sqlite-sqlcipher";

// ...

const db = await SQLite.openDatabase({ name: DB_NAME, key: DB_PASSWORD, location: 'default' });
```

## License

MIT