import 'package:flutter/material.dart';

import 'package:bus_unab/src/pages/home.dart';

Map<String, WidgetBuilder> getApplicationRoutes(){
  return <String, WidgetBuilder>{
        HomePage.pageName: (BuildContext context) => HomePage(),
  };
}