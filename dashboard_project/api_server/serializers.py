from rest_framework import serializers
from .models import UserModel
from .models import WaferModel
from .models import UnitModel
from .models import CellModel

#Here are the serializer functions for each table in the database, Django framework needs data serialization that the data can be used via the RESTFUL.

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id', 'user_name', 'user_password', 'user_fullname', 'user_phone', 'user_email', 'user_role', 'user_comments')

class CellSerializer(serializers.ModelSerializer):
    class Meta:
        model = CellModel
        fields = ('cell_no', 'cell_pollution', 'cell_width', 'cell_thickness')

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnitModel
        fields = ('unit_no', 'unit_condition', 'unit_strength', 'unit_purity', 'unit_precision', 'unit_cell_no')

class WaferSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaferModel
        fields = ('wafer_lot', 'wafer_wafer', 'wafer_group', 'wafer_punchSeq', 'wafer_week', 'wafer_day', 'wafer_shift', 'wafer_worker',
        'wafer_stepper', 'wafer_conductivity', 'wafer_strength', 'wafer_purity', 'wafer_precision', 'wafer_temperature', 'wafer_humidity', 
        'wafer_pollution', 'wafer_width', 'wafer_thickness', 'wafer_noise', 'wafer_mq', 'wafer_mac', 'wafer_logic', 'wafer_signal_A', 'wafer_signal_B', 'wafer_date', 'wafer_die_x', 'wafer_die_y', 'wafer_unit_no')