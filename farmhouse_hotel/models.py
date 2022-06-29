from django.db import models


# Create your models here.

class Rooms(models.Model):
    ROOM_TYPE = (
        ('SIN', 'single'),
        ('DLX', 'dulex'),   
    )
    #ROOM_STATUS = ()
    
    room_type = models.CharField(max_length=10, choices= ROOM_TYPE)
    #status = models.CharField(choices=ROOM_STATUS, max_length=3)
