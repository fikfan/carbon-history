from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views import View
from django.conf import settings
import os
# Create your views here.

class CarbonDataView(View):
    def get(self, request):
        json_path = os.path.join(settings.BASE_DIR, 'output.json')
        with open(json_path, 'r') as file:
            data = json.load(file)
        return JsonResponse(data)

