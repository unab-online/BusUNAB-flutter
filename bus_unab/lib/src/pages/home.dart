import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);

  static final String pageName = "home";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Bus UNAB'),
        ),
        body: Center(
          child: Container(
            child: Column(
              children: <Widget>[
                Text('Contenido HomePage'),                
              ]
            ),
          ),
        ),
      );
  }
}