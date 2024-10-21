# json_api/urls.py
from django.urls import path
from .views import CarbonDataView

urlpatterns = [
    path('data/', CarbonDataView.as_view(), name='carbon_data'),
]