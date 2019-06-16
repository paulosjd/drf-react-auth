from django.http import JsonResponse
from django.views.generic import View

import logging
log = logging.getLogger(__name__)


class ProfileSummary(View):

    def get(self, request, *args, **kwargs):
        user_id = kwargs['user_id']

        return JsonResponse([
            {'name': 'body_weight', 'value': '65.5 kg', 'date': '19th Jan 2019'},
            {'name': 'blood_pressure', 'value': '65.5 kg', 'date': '19th Jan 2019'}], safe=False)

    def summary_data(self):
        pass



