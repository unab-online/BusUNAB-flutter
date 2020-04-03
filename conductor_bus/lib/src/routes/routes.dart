import 'package:flutter/material.dart';

import '../pages/home.dart';


Map<String, WidgetBuilder> getApplicationRoutes(){
  return <String, WidgetBuilder>{
        HomePage.pageName: (BuildContext context) => HomePage(),
  };
}