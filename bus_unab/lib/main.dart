import 'package:bus_unab/src/pages/home.dart';
import 'package:bus_unab/src/routes/routes.dart';
import 'package:flutter/material.dart';
 
void main() => runApp(MyApp());
 
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Bus UNAB',
      initialRoute: HomePage.pageName,
      routes: getApplicationRoutes(),
    );
  }
}