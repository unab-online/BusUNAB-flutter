import 'package:flutter/material.dart';

import 'src/pages/home.dart';
import 'src/routes/routes.dart';
 
void main() => runApp(MyApp());
 
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Conductor Bus UNAB',
      initialRoute: HomePage.pageName,
      routes: getApplicationRoutes(),
    );
  }
}