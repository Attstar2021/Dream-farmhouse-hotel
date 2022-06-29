from curses.ascii import US
from statistics import mode
from django.contrib.auth.models import User
from django.db import models
from django.db.models import Model
import uuid


class BaseModel(models.Model):
   uid = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
   created_at = models.DateField(auto_now_add=True)
   created_at = models.DateField(auto_now_add=True)

   class Meta:
       abstract = True

class Facilities(BaseModel):
    facility_name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.facility_name

class Hotel(BaseModel):
    room_name = models.CharField(max_length=50)
    room_price = models.IntegerField()
    description = models.TextField()
    facilities = models.ManyToManyField(Facilities)
    room_count = models.IntegerField(default=5)


class RoomImages(BaseModel):
    room = models.ForeignKey(Hotel, related_name='images', on_delete=models.CASCADE)
    images = models.ImageField(upload_to="hotels")


class RoomBooking(BaseModel):
    room = models.ForeignKey(Hotel, related_name='hotel_bookings', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='user_bookings', on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    booking_type = models.CharField(max_length=50, choices=(('pre-paid', 'pre-paid'), ('post paid', 'post paid')))
