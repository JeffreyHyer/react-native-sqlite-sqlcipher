// @ts-ignore
import * as React from 'react'
// @ts-ignore
import { Text, SafeAreaView, View } from 'react-native'
// @ts-ignore
import SQLite from 'react-native-sqlite-sqlcipher'

SQLite.enablePromise(true)
SQLite.DEBUG(true)

export default function App() {
  const [result, setResult] = React.useState<number | undefined>()

  let db;

  React.useEffect(() => {
    const openDB = async () => {
      try {
        db = await SQLite.openDatabase({ name: 'testing', location: 'default', key: 'password' })

        const rows = await db.executeSql('SELECT sqlite_version()')

        setResult(rows[0].rows.item(0)['sqlite_version()'])
      } catch (e) {
        console.log('[!] ERROR: ', e)
      }
    }

    openDB()
  }, [])

  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Text>Result: {result}</Text>
      </View>
    </SafeAreaView>
  )
}
