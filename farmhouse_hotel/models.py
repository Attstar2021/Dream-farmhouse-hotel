from django.db import models
import uuid


class farmhouseModal(models.Model):
 uid = models.UUIDField(default=uuid.uuid4())