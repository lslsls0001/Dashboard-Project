from enum import unique
from django.db import models

# Create your models here.

# Each model below corresponding to one table in the database, following the RESTFUL rules to setup the column informations.

class UserModel(models.Model):

   user_name = models.CharField(max_length=16, unique=True)
   user_password = models.CharField(max_length=256,unique=True)
   user_fullname = models.CharField(max_length=16)
   user_phone = models.CharField(max_length=16)
   user_email = models.CharField(max_length=128)
   user_role = models.CharField(max_length=8)
   user_comments = models.JSONField(null=True)

class CellModel(models.Model):
   cell_no = models.IntegerField(default=0, unique=True)
   cell_pollution = models.DecimalField(max_digits = 10, decimal_places = 8)
   cell_width = models.DecimalField(max_digits = 10, decimal_places = 8)
   cell_thickness = models.DecimalField(max_digits = 10, decimal_places = 9)

class UnitModel(models.Model):

   unit_no = models.IntegerField(default=0, unique=True)
   unit_condition = models.CharField(max_length=100)
   unit_strength = models.DecimalField(max_digits = 10, decimal_places = 9)
   unit_purity = models.DecimalField(max_digits = 10, decimal_places = 8)
   unit_precision = models.DecimalField(max_digits = 10, decimal_places = 8)
   unit_cell_no = models.ForeignKey(CellModel, to_field='cell_no', related_name='cell', on_delete=models.CASCADE)

class WaferModel(models.Model):

   wafer_lot = models.IntegerField()
   wafer_wafer = models.IntegerField()
   wafer_group = models.IntegerField()
   wafer_punchSeq = models.IntegerField()
   wafer_week = models.IntegerField()
   wafer_day = models.CharField(max_length=100)
   wafer_shift = models.CharField(max_length=100)
   wafer_worker = models.IntegerField()
   wafer_stepper = models.IntegerField()
   wafer_conductivity = models.DecimalField(max_digits = 10, decimal_places = 8)
   wafer_strength = models.DecimalField(max_digits = 10, decimal_places = 9)
   wafer_purity = models.DecimalField(max_digits = 10, decimal_places = 8)
   wafer_precision = models.DecimalField(max_digits = 10, decimal_places = 8)
   wafer_temperature = models.DecimalField(max_digits = 10, decimal_places = 8)
   wafer_humidity = models.DecimalField(max_digits = 10, decimal_places = 8)
   wafer_pollution = models.DecimalField(max_digits = 10, decimal_places = 8)
   wafer_width = models.DecimalField(max_digits = 10, decimal_places = 8)
   wafer_thickness = models.DecimalField(max_digits = 10, decimal_places = 9)
   wafer_noise = models.DecimalField(max_digits = 10, decimal_places = 8)
   wafer_mq = models.DecimalField(max_digits = 10, decimal_places = 9)
   wafer_mac = models.DecimalField(max_digits = 10, decimal_places = 9)
   wafer_logic = models.DecimalField(max_digits = 10, decimal_places = 8)
   wafer_signal_A = models.DecimalField(max_digits = 10, decimal_places = 6)
   wafer_signal_B = models.DecimalField(max_digits = 10, decimal_places = 6)
   wafer_date = models.CharField(max_length=100)
   wafer_die_x = models.IntegerField()
   wafer_die_y = models.IntegerField()
   wafer_unit_no = models.ForeignKey(UnitModel, to_field='unit_no', related_name='unit', on_delete=models.CASCADE)

