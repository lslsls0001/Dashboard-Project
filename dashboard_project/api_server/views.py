from django.core import exceptions
from django.db.models import query
from django.shortcuts import render
from rest_framework import generics, serializers, status
from .serializers import UserSerializer, CellSerializer, UnitSerializer, WaferSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import UserModel, CellModel, UnitModel, WaferModel

import decimal

# Create your views here.

# Here we have three views function, UserAPIView to user table, CellAPIView to cell table, UnitAPIView to unit table, and the WaferAPIView to wafer table. please check the RESTFUL grammar for the coding details. All Views can receive the request from client end, processing the request by visiting the database, then return the data back to the client end with proper label.

class UserAPIView(generics.CreateAPIView):
    
    serializer_class = UserSerializer

    queryset = UserModel.objects.all()

    def post(self, request, *args, **kwargs):
        u_name=request.data.get('username')
        u_password=request.data.get('password')
        try:
            user = UserModel.objects.get(user_name=u_name)

            if user.user_password!=u_password:
                #raise exceptions.AuthenticationFailed
                data={
                    'msg': 'Password incorrect，please try again.',
                    'status' : 404
                }
                return Response(data)

            data={
                'msg':'login successful',
                'status' : 200
            }
            return Response(data)
        except UserModel.DoesNotExist:
            #raise exceptions.NotFound
            data={
                'msg': 'Username incorrect，please try again.',
                'status': 404
            }
            
            return Response(data)

class CellAPIView(generics.GenericAPIView):

    serializer_class = CellSerializer

    queryset = CellModel.objects.all()

    def post(self, request, *args, **kwargs):

        level=request.data.get('level')

        dataTable=request.data.get('table_selectedOption')
        chartType=request.data.get('chart_selectedOption')

        firstAxisTitle=request.data.get('firstAxis_selectedOption')
        secondAxisTitle=request.data.get('secondAxis_selectedOption')
        thirdAxisTitle=request.data.get('thirdAxis_selectedOption')

        print(firstAxisTitle)
        print(secondAxisTitle)
        print(thirdAxisTitle)

        firstAxisList={}
        secondAxisList={}
        thirdAxisList={}

        try:
            if firstAxisTitle is not None:
                if len(firstAxisTitle) == 1:
                    arr = []
                    tempSet = CellModel.objects.values_list(firstAxisTitle[0])
                    for item in tempSet:
                        if type(item[0]) is decimal.Decimal:
                            arr.append(float(item[0]))
                        else:
                            arr.append(item[0])
                    firstAxisList[firstAxisTitle[0]] = arr
                else:
                    dict = {}
                    for title in firstAxisTitle:
                        arr = []
                        tempSet = CellModel.objects.values_list(title)
                        for item in tempSet:
                            if type(item[0]) is decimal.Decimal:
                                arr.append(float(item[0]))
                            else:
                                arr.append(item[0])
                        dict[title] = arr
                    firstAxisList = dict
            if secondAxisTitle is not None:
                if len(secondAxisTitle) == 1:
                    arr = []
                    tempSet = CellModel.objects.values_list(secondAxisTitle[0])
                    for item in tempSet:
                        if type(item[0]) is decimal.Decimal:
                            arr.append(float(item[0]))
                        else:
                            arr.append(item[0])
                    secondAxisList[secondAxisTitle[0]] = arr
                else:
                    dict = {}
                    for title in secondAxisTitle:
                        arr = []
                        tempSet = CellModel.objects.values_list(title)
                        for item in tempSet:
                            if type(item[0]) is decimal.Decimal:
                                arr.append(float(item[0]))
                            else:
                                arr.append(item[0])
                        dict[title] = arr
                    secondAxisList = dict
            if thirdAxisTitle is not None:
                if len(thirdAxisTitle) == 1:
                    arr = []
                    tempSet = CellModel.objects.values_list(thirdAxisTitle[0])
                    for item in tempSet:
                        if type(item[0]) is decimal.Decimal:
                            arr.append(float(item[0]))
                        else:
                            arr.append(item[0])
                    thirdAxisList[thirdAxisTitle[0]] = arr
                else:
                    dict = {}
                    for title in thirdAxisTitle:
                        arr = []
                        tempSet = CellModel.objects.values_list(title)
                        for item in tempSet:
                            if type(item[0]) is decimal.Decimal:
                                arr.append(float(item[0]))
                            else:
                                arr.append(item[0])
                        dict[title] = arr
                    thirdAxisList = dict

            data={
                'Level': level,
                'dataTable': dataTable,
                'chartType': chartType,
                'firstAxisList': firstAxisList,
                'secondAxisList': secondAxisList,
                'thirdAxisList': thirdAxisList,
                'msg': 'All data are collected',
                'status' : 200
            }
            return Response(data)
        except CellModel.DoesNotExist:
            #raise exceptions.NotFound
            data={
                'msg': 'Some data are missing',
                'status': 404
            }  
            return Response(data)

class UnitAPIView(generics.GenericAPIView):

    serializer_class = UnitSerializer

    queryset = UnitModel.objects.all()

    def post(self, request, *args, **kwargs):

        level=request.data.get('level')

        dataTable=request.data.get('table_selectedOption')
        chartType=request.data.get('chart_selectedOption')

        firstAxisTitle=request.data.get('firstAxis_selectedOption')
        secondAxisTitle=request.data.get('secondAxis_selectedOption')
        thirdAxisTitle=request.data.get('thirdAxis_selectedOption')

        print(firstAxisTitle)
        print(secondAxisTitle)
        print(thirdAxisTitle)

        firstAxisList={}
        secondAxisList={}
        thirdAxisList={}

        try:
            if firstAxisTitle is not None:
                if len(firstAxisTitle) == 1:
                    arr = []
                    tempSet = UnitModel.objects.values_list(firstAxisTitle[0])
                    for item in tempSet:
                        if type(item[0]) is decimal.Decimal:
                            arr.append(float(item[0]))
                        else:
                            arr.append(item[0])
                    firstAxisList[firstAxisTitle[0]] = arr
                else:
                    dict = {}
                    for title in firstAxisTitle:
                        arr = []
                        tempSet = UnitModel.objects.values_list(title)
                        for item in tempSet:
                            if type(item[0]) is decimal.Decimal:
                                arr.append(float(item[0]))
                            else:
                                arr.append(item[0])
                        dict[title] = arr
                    firstAxisList = dict
            if secondAxisTitle is not None:
                if len(secondAxisTitle) == 1:
                    arr = []
                    tempSet = UnitModel.objects.values_list(secondAxisTitle[0])
                    for item in tempSet:
                        if type(item[0]) is decimal.Decimal:
                            arr.append(float(item[0]))
                        else:
                            arr.append(item[0])
                    secondAxisList[secondAxisTitle[0]] = arr
                else:
                    dict = {}
                    for title in secondAxisTitle:
                        arr = []
                        tempSet = UnitModel.objects.values_list(title)
                        for item in tempSet:
                            if type(item[0]) is decimal.Decimal:
                                arr.append(float(item[0]))
                            else:
                                arr.append(item[0])
                        dict[title] = arr
                    secondAxisList = dict
            if thirdAxisTitle is not None:
                if len(thirdAxisTitle) == 1:
                    arr = []
                    tempSet = UnitModel.objects.values_list(thirdAxisTitle[0])
                    for item in tempSet:
                        if type(item[0]) is decimal.Decimal:
                            arr.append(float(item[0]))
                        else:
                            arr.append(item[0])
                    thirdAxisList[thirdAxisTitle[0]] = arr
                else:
                    dict = {}
                    for title in thirdAxisTitle:
                        arr = []
                        tempSet = UnitModel.objects.values_list(title)
                        for item in tempSet:
                            if type(item[0]) is decimal.Decimal:
                                arr.append(float(item[0]))
                            else:
                                arr.append(item[0])
                        dict[title] = arr
                    thirdAxisList = dict

            data={
                'Level': level,
                'dataTable': dataTable,
                'chartType': chartType,
                'firstAxisList': firstAxisList,
                'secondAxisList': secondAxisList,
                'thirdAxisList': thirdAxisList,
                'msg': 'All data are collected',
                'status' : 200
            }
            return Response(data)
        except UnitModel.DoesNotExist:
            #raise exceptions.NotFound
            data={
                'msg': 'Some data are missing',
                'status': 404
            }  
            return Response(data)

class WaferAPIView(generics.GenericAPIView):

    serializer_class = WaferSerializer

    queryset = WaferModel.objects.all()

    def post(self, request, *args, **kwargs):

        level=request.data.get('level')

        dataTable=request.data.get('table_selectedOption')
        chartType=request.data.get('chart_selectedOption')

        firstAxisTitle=request.data.get('firstAxis_selectedOption')
        secondAxisTitle=request.data.get('secondAxis_selectedOption')
        thirdAxisTitle=request.data.get('thirdAxis_selectedOption')

        print(firstAxisTitle)
        print(secondAxisTitle)
        print(thirdAxisTitle)

        firstAxisList={}
        secondAxisList={}
        thirdAxisList={}

        try:
            if firstAxisTitle is not None:
                if len(firstAxisTitle) == 1:
                    arr = []
                    tempSet = WaferModel.objects.values_list(firstAxisTitle[0])
                    for item in tempSet:
                        if type(item[0]) is decimal.Decimal:
                            arr.append(float(item[0]))
                        else:
                            arr.append(item[0])
                    firstAxisList[firstAxisTitle[0]] = arr
                else:
                    dict = {}
                    for title in firstAxisTitle:
                        arr = []
                        tempSet = WaferModel.objects.values_list(title)
                        for item in tempSet:
                            if type(item[0]) is decimal.Decimal:
                                arr.append(float(item[0]))
                            else:
                                arr.append(item[0])
                        dict[title] = arr
                    firstAxisList = dict
            if secondAxisTitle is not None:
                if len(secondAxisTitle) == 1:
                    arr = []
                    tempSet = WaferModel.objects.values_list(secondAxisTitle[0])
                    for item in tempSet:
                        if type(item[0]) is decimal.Decimal:
                            arr.append(float(item[0]))
                        else:
                            arr.append(item[0])
                    secondAxisList[secondAxisTitle[0]] = arr
                else:
                    dict = {}
                    for title in secondAxisTitle:
                        arr = []
                        tempSet = WaferModel.objects.values_list(title)
                        for item in tempSet:
                            if type(item[0]) is decimal.Decimal:
                                arr.append(float(item[0]))
                            else:
                                arr.append(item[0])
                        dict[title] = arr
                    secondAxisList = dict
            if thirdAxisTitle is not None:
                if len(thirdAxisTitle) == 1:
                    arr = []
                    tempSet = WaferModel.objects.values_list(thirdAxisTitle[0])
                    for item in tempSet:
                        if type(item[0]) is decimal.Decimal:
                            arr.append(float(item[0]))
                        else:
                            arr.append(item[0])
                    thirdAxisList[thirdAxisTitle[0]] = arr
                else:
                    dict = {}
                    for title in thirdAxisTitle:
                        arr = []
                        tempSet = WaferModel.objects.values_list(title)
                        for item in tempSet:
                            if type(item[0]) is decimal.Decimal:
                                arr.append(float(item[0]))
                            else:
                                arr.append(item[0])
                        dict[title] = arr
                    thirdAxisList = dict

            data={
                'Level': level,
                'dataTable': dataTable,
                'chartType': chartType,
                'firstAxisList': firstAxisList,
                'secondAxisList': secondAxisList,
                'thirdAxisList': thirdAxisList,
                'msg': 'All data are collected',
                'status' : 200
            }
            return Response(data)
        except WaferModel.DoesNotExist:
            #raise exceptions.NotFound
            data={
                'msg': 'Some data are missing',
                'status': 404
            }  
            return Response(data)